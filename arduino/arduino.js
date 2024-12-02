import { onEvent, sendEvent, startServer, } from "soquetic";
import { ReadlineParser, SerialPort } from "serialport";
import { sendData } from "../soquetic/server.js";



const port = new SerialPort({
  //Completar con el puerto correcto
  path: "COM3",
  baudRate: 9600,
});
let h = null
let t = null
while (h === null || t === null) {
port.on("data",(data)=>{

    
      if (data.toString().trim()[0] === "H") {
        h = data.toString().trim().trim()
      }else 
      if (data.toString().trim()[0] === "T") {
        t = data.toString().trim().trim()
      }
    
})}
sendData("enviarSensores",{h,t})


onEvent("boton",(data)=>{
  port.write(data)
})

startServer()