import serial
from base import Conexion
import datetime
from tiempos import obtener_hora, obtener_fecha, tiempo_transcurrido

arduino = serial.Serial(port='COM3', baudrate=9600, timeout=0.1)
hora_parametro = datetime.datetime.now().time()
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
    hora_actual = obtener_hora()
    fecha_actual = obtener_fecha()
    if tiempo_transcurrido(hora_parametro):
        obtener()
        print("Ha transcurrido un minuto.")
        hora_parametro = datetime.datetime.now().time()
        break