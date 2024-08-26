class SongListView {
  #parentElement = document.querySelector(".main");
  #data;

  #clear() {
    this.#parentElement.innerHTML = "";
  }

  #generateMarkup() {
    if (this.#data.length === 0) {
      return `<div class="empty-message">Nema pronađenih pjesama.</div>`;
    } else {
      return `
        <ul class="main__song-list">
        ${this.#data
          .map(
            (song) =>
              `<li class="main__song-list--item">${song.artistName} - ${song.trackName}</li>`
          )
          .join("")}
            </ul>`;
    }
  }

  addHandlerRender(handler) {
    window.addEventListener("load", handler);
  }

  renderSpinner() {
    const markup = "<div id='loadingSpinner'></div>";

    this.#parentElement.innerHTML = "";
    this.#parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  render(data) {
    this.#data = data;

    const markup = this.#generateMarkup();
    this.#clear();
    this.#parentElement.insertAdjacentHTML("afterbegin", markup);
  }
}

export default new SongListView();
