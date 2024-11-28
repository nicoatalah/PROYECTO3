import { onEvent, startServer, sendEvent } from "soquetic";
import { añadirPlanta } from "../login/login.js";
import { fetchPlant } from "../api/api.js";

onEvent("infoPlanta", (nombre) => {
  const res = fetchPlant(nombre);
  return res;
});

onEvent("añadirPlanta", async (data) => {
  const plantas = await añadirPlanta(data);
  return plantas;
});

export const sendData = (data)=>{
    sendEvent("enviarDesdeArduino",data)
};
startServer();
