import network, time, ujson
from umqtt.simple import MQTTClient
from machine import ADC, Pin
import gps_module, accelerometer

wifi = network.WLAN(network.STA_IF)
wifi.active(True)
wifi.connect("your_ssid", "your_pass")
while not wifi.isconnected():
    time.sleep(1)

client = MQTTClient("ESP32", "broker.hivemq.com")
client.connect()

while True:
    gps_data = gps_module.get_position()
    fuel = ADC(Pin(34)).read()
    hours = time.ticks_ms() // 3600000
    accel = accelerometer.read()
    speed = gps_data.get('speed', 0)

    payload = ujson.dumps({
        "id": "tractor_1",
        "gps": gps_data,
        "fuel": fuel,
        "hours": hours,
        "speed": speed,
        "accel": accel
    })

    client.publish("agricola/telemetria", payload)
    time.sleep(5)