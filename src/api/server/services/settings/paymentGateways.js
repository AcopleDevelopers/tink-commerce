'use strict';

const mongo = require('../../lib/mongo');
const fetch = require('node-fetch')

class PaymentGatewaysService {
  constructor() {}

  getGateway(gatewayName) {
    return mongo.db.collection('paymentGateways').findOne({name: gatewayName}).then(data => {
      return this.changeProperties(data);
    });
  }

  updateGateway(gatewayName, data) {
    if (Object.keys(data).length === 0) {
      return this.getGateway(gatewayName);
    } else {
      return mongo.db.collection('paymentGateways')
      .updateOne(
        { name: gatewayName },
        { $set: data },
        { upsert: true })
      .then(res => this.getGateway(gatewayName));
    }
  }

  async veririfyQvoTransaction(transctionId) {
    const qvoSettings = await mongo.db.collection('PaymentGateways').findOne({name: 'qvo'})
    const transactionData = await fetch(`https://api.qvo.cl/transactions/${transactionId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${qvoSettings['private-key']}`
      }
    })
    console.log('transactionData:', transactionData)
    if (transactionData.status === 'successful') {
      return transactionData.gateway_response
    }
  }

  changeProperties(data) {
    if (data) {
      delete data._id;
      delete data.name;
    }
    return data;
  }
}

module.exports = new PaymentGatewaysService();
