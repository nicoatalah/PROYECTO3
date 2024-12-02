import fs from "fs";
export const añadirPlanta = (data) => {
    try{
        let plantas = JSON.parse(fs.readFiileSync("./plantas.json", "utf-8"));
        plantas = [...plantas, data];
        fs.writeFileSync("./plantas.json", plantas, "utf-8");

        return plantas;
    }
    catch {
        console.log("[-] Ocurrio un Error.")
    }
};
