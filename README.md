# TinkCommerce
### ACOPLE Ecommerce Solution
Forked from _https://github.com/cezerin/cezerin_

## Development Flow:

 1. Clone the repo
 2. `cd` into the cloned repo
 3. Run `npm install`
 4. Run mongodb: `mongod --dbpath <dbDirectory> &`. dbDirectory can be any directory, ex: `./db`
 5. Run `npm run build:watch`
 6. Develop (Refreshing the store will be needed to reflect changes).

## Dialogflow:

 1. Go to [Dialogflow](https://console.dialogflow.com)
 2. Log in with the corresponding credentials
 3. Create an _Agent_ selecting the corresponding language, timezone, project and setting a name.

## Transbank Webpay
#### For integration tests:

 1. Set the clients _commerce_code_ on the corresponding variable [here](https://github.com/UTipsProjects/ucommerce/blob/master/src/api/server/paymentGateways/TransbankCertificates.js).
 2. Make sure the [_WP_ client](https://github.com/UTipsProjects/ucommerce/blob/master/src/api/server/WebpayClient.js) environment is set to _INTEGRACION_.
 3. Do the tests.

*Integration tests can be done on your local development environment.
 
#### For Production:
1. Change the _publicKey_ and _privateKey_ certificates to the ones given by Transbank [here](https://github.com/UTipsProjects/ucommerce/blob/master/src/api/server/paymentGateways/TransbankCertificates.js).
2. Make sure the [_WP_ client](https://github.com/UTipsProjects/ucommerce/blob/master/src/api/server/WebpayClient.js) environment is set to _PRODUCCION_.
3. Deploy your TinkCommerce.

## Deployment Flow:

 1. Create a repo for the client as a fork of the central [TinkCommerce repo](https://github.com/UTipsProjects/ucommerce).
 3. Edit the _startup_script_ located [_here_](https://github.com/UTipsProjects/ucommerce/blob/master/src/api/server/setup-script.sh) on line 74 to set the admins email address and the domain of the store.
 4. Go to [Google Cloud Platform](https://console.cloud.google.com/).
 5. Log in with the corresponding credentials.
 6. Go to _Compute Engine_ => _vm instances_
 7. Select _create_ to create a new VM instance.
 8. Select _Ubuntu 18.04 LTS minimal_ as the OS.
 9. At _Identity and API access_ select _Dialogflow Integrations_ (Requires a Dialogflow _agent_ for the project).
 10. At the _Firewall_ section allow HTTP and HTTPS traffic.
 11. At the _Automation_ section, _Startup Script_ copy the _setup_script_ you just edited.
 12. Click on _create_ button and wait for the instance to start and run the _startup-script_.
 13. When the instance is ready, get its _public ip_
 14. Go to [Cloudflare](https://www.cloudflare.com/) and log in with the corresponding credentials.
 15. Select the _DNS_ Tab.
 16. Create a new _A_ record pointing to the _VM Instance_ public IP.
