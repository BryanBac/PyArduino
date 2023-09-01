import serial 
import time 

arduino = serial.Serial(port='COM3', baudrate=9600, timeout=0.1)

def obtener():
    data = arduino.readline()
    print(data)

while True:
    obtener()