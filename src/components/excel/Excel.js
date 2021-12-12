export class Excel {
  constructor(selector, options) {
    this.$el = document.querySelector(selector);
    this.elements = options?.components || [];
  }

  getRoot() {
    const $root = document.createElement('div');
    this.elements.forEach((Element) => {
      const element = new Element();
      $root.insertAdjacentHTML('beforeend', element.toHTML());
    });

    return $root;
  }

  render() {
    this.$el.append(this.getRoot());
  }
}
