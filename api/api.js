import fetch from "node-fetch";

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

export async function fetchPlant(nombre) {
  const response = await fetch(
    "https://perenual.com/api/species-list?key=sk-oG1M66c73d4c30d016581&q=" +
      nombre
  );
  const json = await response.json();
  let data;
  for (let i = 0; i < json.data.length; i++) {
    let id = json.data[i].id;
    data = await fetchInfo(id);
  }
  return data;
}

async function fetchInfo(id) {
  let info;
  const response = await fetch(
    "https://perenual.com/api/species/details/" +
      id +
      "?key=sk-oG1M66c73d4c30d016581"
  );
  const json = await response.json();
  let { common_name,
    scientific_name,
    type,
    watering,
    sunlight,
    pruning_month,
    maintenance,
    description
     } = json;

  info = { common_name,
    scientific_name,
    type,
    watering,
    sunlight,
    pruning_month,
    maintenance,
    description  };
  return info;
}
