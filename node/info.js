/**
 * Created with JetBrains WebStorm.
 * User: C-Jarrick.Miao
 * Date: 11/16/12
 * Time: 4:49 PM
 * To change this template use File | Settings | File Templates.
 */
var os=require('os');
var fs = require('fs');
var info="";
console.log("Hostname: "+os.hostname());
info+="Hostname: "+os.hostname()+"\n";

console.log("Opearation System: "+os.type()+os.release());
info+="Opearation System: "+os.type()+os.release()+"\n";

console.log("Running Time "+os.uptime());
info+="Running Time "+os.uptime()+"\n";

console.log("Disk total amount: " +os.totalmem());
info+="Disk total amount: " +os.totalmem()+"\n";

console.log("Disk freemem amount: "+os.freemem());
info+="Disk freemem amount: "+os.freemem()+"\n";

console.log("CPU Core number: "+ os.cpus.length)
info+="CPU Core number: "+ os.cpus.length+"\n";

console.log("CPU: "+os.cpus()[0].model);
info+="CPU: "+os.cpus()[0].model+"\n";

fs.writeFile('message.txt', info, function (err) {
    if (err) throw err;
    console.log('info message saved to '+ __dirname+"\message.txt");
});