//Se declaran las variables como constantes en el código
const int sensorPin = A0;  // Pin analógico donde está conectado el sensor
const int umbral = 500; // Número que sirve para asignar el umbral para determinar el nivel de humedad

//Se realiza la inicialización de la comunicación
void setup() {
  Serial.begin(9600);  // Iniciar comunicación serial a 9600 bits por segundo
}

void loop() {
  int sensorValue = analogRead(sensorPin); // Leer el valor del sensor por medio del pin asociado al sensorPin
  Serial.print("Valor del sensor: ");
  Serial.println(sensorValue);

  // Aquí tengo que mandar a la base de datos
  if (sensorValue > umbral) { 
    Serial.println("Seco"); 
  } else {
    Serial.println("Humedo");
  }

  delay(1000); // Esperar un segundo antes de tomar otra lectura
}
