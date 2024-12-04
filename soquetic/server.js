import { onEvent, startServer, sendEvent } from "soquetic";
import { añadirPlanta } from "../login/login.js";
import { fetchPlant } from "../api/api.js";
import { updateFavoritos, readFavoritos } from "../favoritos/favoritos.js";
import {SerialPort} from "serialport"
import { ReadlineParser } from "@serialport/parser-readline";



onEvent("infoPlanta", (nombre) => {
  const res = fetchPlant(nombre);
  return res;
});

onEvent("añadirPlanta", async (data) => {
  const plantas = await añadirPlanta(data);
  return plantas;
});

onEvent("readFavoritos",()=>{ return readFavoritos()})
onEvent("updateFavoritos",(data)=>{  updateFavoritos(data)})


export const sendData = (data)=>{
    sendEvent("enviarDesdeArduino",data)
};





const port = new SerialPort({
  //Completar con el puerto correcto
  path: "COM4",
  baudRate: 19200,
});
let h = null
let t = null
let l = null
    const parser = port.pipe(new ReadlineParser({ delimiter: "\n" }));

  parser.on("data",(data)=>{

console.log(data.toString())
        if (data.toString()[0] === "H") {
          h = data.toString().trim().split(" ")[1]

        }else 
        if (data.toString()[0] === "T") {
          t = data.toString().trim().split(" ")[1]     }
          else
         if (data.toString()[0] === "L") {
          l = data.toString().trim().split(" ")[1]}

        
        if (t!= null && h != null && l != null) {
          sendData("enviarSensores",{h:h,t:t,l:l})
          console.log({h:h,t:t,l:l})

          t = null
          h = null
          l = null
        }
      
  })



onEvent("boton",(data)=>{
  port.write(data)
})

startServer();

