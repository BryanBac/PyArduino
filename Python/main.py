import serial
from base import Conexion
import time 

arduino = serial.Serial(port='COM3', baudrate=9600, timeout=0.1)
tiempo_anterior = 0
fecha_actual = ""
hora_actual = ""
db = Conexion()
# COLOCAR CREDENCIALES EN CLASE BASE
db.conectar()
def obtener():
    data = arduino.readline().decode("utf-8").replace("\r\n", "")
    if len(data)>0:
        print(data,type(data))
        db.insertarUsuario(data, fecha_actual, hora_actual)

while True:
    obtener()