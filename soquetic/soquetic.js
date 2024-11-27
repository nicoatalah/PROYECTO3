import{onEvent, startServer, sendEvent} from "soquetic"
import {fetchPlant} from "../api/api.js"


let infoPlanta = fetchPlant("Ao Shime No Uchi Japanese Maple");
console.log(infoPlanta);

export const sendData = (data)=>{
    sendEvent("enviarDesdeArduino",data)
}

