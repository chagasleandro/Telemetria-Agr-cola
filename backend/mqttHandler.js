const mqtt = require('mqtt');
const { saveTelemetry } = require('./db');

let client;

module.exports.connect = () => {
  client = mqtt.connect(process.env.MQTT_BROKER);

  client.on('connect', () => {
    console.log('Conectado ao broker MQTT');
    client.subscribe('agricola/telemetria');
  });

  client.on('message', async (topic, message) => {
    const data = JSON.parse(message.toString());
    await saveTelemetry(data);
  });
};