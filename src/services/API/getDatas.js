const url = import.meta.env.VITE_JSON_URL;
// const url = import.meta.env.VITE_API_URL;

export async function getDatas() {
  try {
    const response = await fetch(url);
    if (!response.ok)
      throw new Error(`Error ${response.status}, ${response.statusText}`);
    const data = await response.json();
    return { state: "fulfilled", data };
  } catch (error) {
    console.error(error.message);
    return { state: "rejected", message: error.message };
  }
}

export async function getDataById(id) {
  return url.endsWith(".json") ? getJSONDataById(id) : getAPIDataById(id);
}

async function getJSONDataById(id) {
  try {
    const response = await fetch(url);
    if (!response.ok)
      throw new Error(`Error ${response.status}, ${response.statusText}`);

    const data = await response.json();

    const dataFound = data.find((home) => home.id === id);
    if (!dataFound) throw new Error("id invalid");

    return { state: "fulfilled", data: dataFound };
  } catch (error) {
    console.error(error.message);
    return { state: "rejected", message: error.message };
  }
}

async function getAPIDataById(id) {
  try {
    const response = await fetch(`${url}/${id}`);
    if (!response.ok)
      throw new Error(`Error ${response.status}, ${response.statusText}`);
    const data = await response.json();

    return { state: "fulfilled", data };
  } catch (error) {
    console.error(error.message);
    return { state: "rejected", message: error.message };
  }
}
