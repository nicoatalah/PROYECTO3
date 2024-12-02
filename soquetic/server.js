import { onEvent, startServer, sendEvent } from "soquetic";
import { añadirPlanta } from "../login/login.js";
import { fetchPlant } from "../api/api.js";
import { updateFavoritos, readFavoritos } from "../favoritos/favoritos.js";


onEvent("infoPlanta", (nombre) => {
  const res = fetchPlant(nombre);
  return res;
});

onEvent("añadirPlanta", async (data) => {
  const plantas = await añadirPlanta(data);
  return plantas;
});

onEvent("readFavoritos",()=>{ return readFavoritos()})
onEvent("updateFavoritos",(data)=>{ return updateFavoritos(data)})


export const sendData = (data)=>{
    sendEvent("enviarDesdeArduino",data)
};
startServer();

console.log(updateFavoritos("gay"))