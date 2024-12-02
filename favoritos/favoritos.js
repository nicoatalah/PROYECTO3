import fs from "fs"

export const updateFavoritos = (data)=>{
    let favoritos = []
      console.log(favoritos)
      console.log(data)
        favoritos.push(data)
        
        fs.writeFileSync(JSON.stringify("favoritos.json",2, null))
        return "Favorito guardado correctamente"
   
}

export  const readFavoritos = ()=>{
    let favoritos = JSON.parse(fs.readFileSync("./favoritos.json","utf-8"))
   
        return favoritos
    
}


