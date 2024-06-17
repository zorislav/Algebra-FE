export const getJSON = async function (url) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Could not fetch the data");

    const data = await res.json();
    return data;
  } catch (err) {
    throw err;
  }
};
