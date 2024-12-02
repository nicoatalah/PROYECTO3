import fs from "fs"

export const updateFavoritos = (data)=>{
    let favoritos = JSON.parse(fs.readFileSync("./favoritos.json","utf-8"))
    
        favoritos.push(data)
        
        fs.writeFileSync("./favoritos.json",JSON.stringify(favoritos,2, null)                                                                                                              )
        return "Favorito guardado correctamente"
}

export  const readFavoritos = ()=>{
    let favoritos = JSON.parse(fs.readFileSync("./favoritos.json","utf-8"))
   
        return favoritos
}


