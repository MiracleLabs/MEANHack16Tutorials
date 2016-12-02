//importing ibmiotf library
var Client = require("ibmiotf");

//configuration details
var appClientConfig = {
    "org": <org-id>,
    "id": <device-id>,
    "auth-key": <auth-key>,
    "auth-token": <auth-token>,
    "type": "shared"
}

//creating referance to the applicationclient
var appClient = new Client.IotfApplication(appClientConfig);

//connecting application client
appClient.connect();
appClient.log.setLevel('debug');

//The event connect triggered when the connection established
appClient.on("connect", function(msg) {
    console.log('connected');
    var myData = {
        'name': 'foo',
        'cpu': 100,
        'mem': 100
    };
    myData = JSON.stringify(myData);
    var i;
    for (i = 0; i < 10; i++) {
      //publising the json data to the application client
        appClient.publishDeviceEvent("MyApplication", "123456", "myEvent", "json", myData);
    }
});

//the event error triggers when an error in connection raises
appClient.on("error", function(err) {
    console.log("Error : " + err);
});
