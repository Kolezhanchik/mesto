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

  delItem(element) {
    element.remove();
  }

  addNew(element) {
    this._container.prepend(element);
  }
}
