import serial
from base import Conexion
import time 

arduino = serial.Serial(port='COM3', baudrate=9600, timeout=0.1)
db = Conexion()
# COLOCAR CREDENCIALES EN CLASE BASE
db.conectar('planta', 'localhost')
def obtener():
    data = arduino.readline()
    print(data)

while True:
    obtener()