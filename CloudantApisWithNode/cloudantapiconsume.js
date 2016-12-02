//requiring unirest npm library
var unirest = require('unirest');

//consuming get api to get the list of databases
unirest.get('https://gkotha.cloudant.com/_all_dbs')
    .headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': <Cloudant Authorization>
    })
    .end(function(response) {
        console.log("the list of databases are, " + JSON.stringify(response.body));
    });

//consuming post api to insert a document in database
unirest.post('<Cloudant URL>')
    .headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': <Cloudant Authorization>
    })
    .send({
        "_id": "digitalsummit",
        "info": "APCloud 2016",
        "org": "Miracle Software Systems"
    })
    .end(function(response) {
        console.log("data posted successfully");
    });

//consuming put api to update an existing document in database
unirest.put('<Cloudant URL>/digitalsummit')
    .headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': <Cloudant Authorization>
    })
    .send({
        "_id": "digitalsummit",
        "_rev": <_rev from Cloudant>,
        "info": "DigitalSummit 2016"
    })
    .end(function(response) {
        console.log("Data updated " + JSON.stringify(response.body));
    });


//consuming delete api to delete a document in database
unirest.delete('<Cloudant URL>/digitalsummit?rev=3-0762eb2ef32656218264fdabdf4c1c1b')
    .headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': <Cloudant Authorization>
    })
    .end(function(response) {
        console.log("Data deleted " + JSON.stringify(response.body));
    });
