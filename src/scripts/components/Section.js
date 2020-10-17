export default class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  rendererItems(rendererItems) {
    rendererItems.forEach(item =>
      this._renderer(item))
  }

  addItem(element) {
    this._container.append(element);
  }

  delItem(id){
    let card = document.querySelector('#' + id);
    card.remove();
    card = null;
  }

  addNew(element) {
    this._container.prepend(element);
  }
}
