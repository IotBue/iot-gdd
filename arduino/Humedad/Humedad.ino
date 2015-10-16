
void setup(){
 Serial.begin(115200); 
 Serial.println("Start");
}

void loop() {
  int sensorReading= analogRead(A0); //reads the sensor value
   Serial.println (sensorReading); 
  //This soil moisture sensor flickers the red LED when conditions get very dry, a sensor reading above 800.
  float soilHumidity = 100 - sensorReading / 10;
  if(soilHumidity < 0 ){
     soilHumidity = 0;
  }
  Serial.println (soilHumidity); //prints out the sensor reading

  delay(1000); //waits for a second

}
