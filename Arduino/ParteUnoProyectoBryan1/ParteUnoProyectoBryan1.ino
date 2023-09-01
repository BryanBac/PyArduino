const int sensorPin = A0;  // Pin analógico donde está conectado el sensor

void setup() {
  Serial.begin(9600);  // Iniciar comunicación serial a 9600 bits por segundo
}

void loop() {
  int sensorValue = analogRead(sensorPin); // Leer el valor del sensor por medio del pin asociado al sensorPin
  Serial.println(sensorValue);
  delay(1000);
}
