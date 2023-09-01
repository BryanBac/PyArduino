import serial 
import datetime
from tiempos import obtener_hora, obtener_fecha, tiempo_transcurrido

arduino = serial.Serial(port='COM3', baudrate=9600, timeout=0.1)
hora_parametro = datetime.datetime.now().time()

def obtener():
    data = arduino.readline()
    print(data)

while True:
    obtener()
    hora_actual = obtener_hora()
    fecha_actual = obtener_fecha()
    print("Hora actual:", hora_actual)
    print("Fecha actual:", fecha_actual)
    if tiempo_transcurrido(hora_parametro):
        print("Ha transcurrido un minuto.")
        hora_parametro = datetime.datetime.now().time()
        break
    else:
        print("no")