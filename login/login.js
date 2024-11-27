export let login = (data) => {
    let usuarios = JSON.parse(fs.readFiileSync("./usuarios.json", "utf-8"));
    let usuarioEncontrado = null;
    for (let i = 0; i <usuarios.length; i++)
}