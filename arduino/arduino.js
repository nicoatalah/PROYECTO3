import { onEvent, sendEvent, startServer, } from "soquetic";
import { ReadlineParser, SerialPort } from "serialport";
import { sendData } from "../soquetic/soquetic.js";
const port = new SerialPort({
  //Completar con el puerto correcto
  path: "COM3",
  baudRate: 9600,
});

port.on("data",(data)=>{
    sendData(data)
});