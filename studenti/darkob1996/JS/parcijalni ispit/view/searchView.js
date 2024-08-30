class SearchView {
  #parentElement = document.querySelector(".search-form__input");

  getQuery() {
    return this.#parentElement.value;
  }

  addHandlerSearch(handler) {
    this.#parentElement.addEventListener("input", handler);
  }
}

export default new SearchView();
