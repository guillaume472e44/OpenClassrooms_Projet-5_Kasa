const url = {
  local: "src/assets/datas/data.json",
  backend: "http://localhost:8080/api/properties",
  current : "local"
};

export async function getDatas() {
  try {
    const response = await fetch(url[url.current]);
    if (!response.ok)
      throw new Error(`Error ${response.status}, ${response.statusText}`);
    const data = await response.json();
    return { state: "fulfilled", data };
  } catch (error) {
    console.error(error.message);
    return { state: "rejected", message: error.message };
  }
}
