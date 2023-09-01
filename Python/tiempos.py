import datetime

def obtener_hora():
    now = datetime.datetime.now()
    hora_actual = now.strftime("%H:%M:%S")
    return hora_actual

def obtener_fecha():
    now = datetime.datetime.now()
    fecha_actual = now.strftime("%Y-%m-%d")
    return fecha_actual

def tiempo_transcurrido(hora_parametro):
    hora_actual = datetime.datetime.now().time()
    diferencia = (datetime.datetime.combine(datetime.date.today(), hora_actual) - datetime.datetime.combine(datetime.date.today(), hora_parametro)).total_seconds()
    
    if diferencia >= 5:
        return True
    else:
        return False