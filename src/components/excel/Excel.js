export class Excel {
  constructor(selector, options) {
    this.$el = document.querySelector(selector);
    this.elements = options?.components || [];
  }

  getRoot() {
    const $root = document.createElement('div');
    $root.classList.add('excel');

    this.elements.forEach((Element) => {
      const $el = document.createElement('div');
      $el.classList.add(Element.className);
      const element = new Element($el);
      $el.innerHTML = element.toHTML();
      $root.append($el);
    });

    return $root;
  }

  render() {
    this.$el.append(this.getRoot());
  }
}
