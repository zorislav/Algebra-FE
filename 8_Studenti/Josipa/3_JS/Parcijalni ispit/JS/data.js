async function fetchData(term) {
  const url = `https://itunes.apple.com/search?term=${encodeURIComponent(
    term
  )}&entity=song&limit=20`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.results.map((r) => ({
      artist: r.artistName,
      song: r.trackName,
    }));
  } catch (e) {
    return [];
  }
}

module.exports = { fetchData };
