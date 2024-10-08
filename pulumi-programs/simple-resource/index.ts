import * as pulumi from "@pulumi/pulumi";

pulumi.log.info("Who am I...?")
let response = await fetch("http://169.254.169.254/latest/meta-data/instance-id");
let instanceID = response.text()

for(var i = 0; i < 100; i++){
    pulumi.log.info(`I am deploying on ${instanceID}...`);
}

