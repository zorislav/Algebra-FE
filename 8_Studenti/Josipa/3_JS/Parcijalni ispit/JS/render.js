function createElement(songData) {
  const li = document.createElement("li");
  li.textContent = `${songData.artist} - ${songData.song}`;
  return li;
}

module.exports = { createElement };
