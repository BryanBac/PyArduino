import mysql.connector
from mysql.connector import Error


class Conexion:
    def __init__(self):
        pass

    def conectar(self):
        try:
            self.connection = mysql.connector.connect(
                host='ls-139b40c46465996e42cf022f0199d0a34bb0ab64.cnqmtkdkm8tk.ca-central-1.rds.amazonaws.com',
                user='usuario',
                password='DfP_51*_sA3',
                database='planta'
            )
            if self.connection.is_connected():
                self.cursor = self.connection.cursor()
                print('¡Conexión Exitosa!')
                return '¡Conexión Exitosa!'
        except Error as e:
            print('Error en la conexión con la base de datos')
            return ('Error en la conexión con la base de datos' +'\n'+  str(e))
    
    def insertarUsuario(self, humedad, fecha, hora):
        if self.connection.is_connected():
            self.cursor = self.connection.cursor()
            parametros = "'" + humedad + "', '" +  fecha+ "', '" +  hora + "'"
            consulta = "INSERT INTO datos (humedad, fecha, hora) VALUES (" + parametros + ");"
            try:
                self.cursor.execute(consulta)
            except Error as e:
                return "Hubo un error :("
            print('Valor insertado')
            self.connection.commit()

    def realizarConsulta(self):
        if self.connection.is_connected():
            query = """SELECT * FROM datos;"""
            self.cursor.execute(query)
            respuesta = self.cursor.fetchall()
            return  respuesta