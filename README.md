## Dialogflow:

 1. Go to [Dialogflow](https://console.dialogflow.com)
 2. Log in with the corresponding credentials
 3. Create an _Agent_ selecting the corresponding language, timezone, project and setting a name.

## Deployment Flow:
 1. Go to [Google Cloud Platform](https://console.cloud.google.com/)
 2. Log in with the corresponding credentials.
 3. Go to _Compute Engine_ => _vm instances_
 4. Select _create_ to create a new VM instance.
 5. Select _Ubuntu 18.04 LTS minimal_ as the OS.
 6. At _Identity and API access_ select _Dialogflow Integrations_ (Requires a Dialogflow _agent_ for the project).
 7. At the _Firewall_ section allow HTTP and HTTPS traffic.
 8. Edit the _startup_script_ located [_here_](https://github.com/UTipsProjects/ucommerce/blob/master/src/api/server/setup-script.sh) on line 74 to set the admins email address and the domain of the store.
 9. At the _Automation_ section, _Startup Script_ copy the _setup_script_ you just edited.
 10. Click on _create_ button and wait for the instance to start and run the _startup-script_.
 11. When the instance is ready, get its _public ip_
 12. Go to [Cloudflare](https://www.cloudflare.com/) and log in with the corresponding credentials.
 13. Select the _DNS_ Tab.
 14. Create a new _A_ record pointing to the _VM Instance_ public IP.

