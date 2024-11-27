import{onEvent, startServer, sendEvent} from "soquetic"

onEvent

export const sendData = (data)=>{
    sendEvent("enviarDesdeArduino",data)
}
startServer()