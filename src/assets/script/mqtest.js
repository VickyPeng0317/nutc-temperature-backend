var mqtt = require('mqtt');
var opt = {
  port: 188,
  clientId: 'nodejasdasds'
};

// var wsClient = mqtt.connect('ws://163.17.136.70:1884');
// wsClient.on('connect', () => console.log('ws connect success'));

var tcpClient = mqtt.connect('tcp://8.tcp.ngrok.io:17247');
tcpClient.on('connect', () => console.log('tcp connect success'));



// client.on('message', function (topic, msg) {
//   console.log(`topic: ${topic}, msg: ${msg}`);
// });
