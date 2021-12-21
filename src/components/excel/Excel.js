import {$} from '@core/Dom';

export class Excel {
  constructor(selector, options) {
    this.$el = document.querySelector(selector);
    this.elements = options?.components || [];
  }

  getRoot() {
    const $root = $.create('div', 'excel');

    this.elements.forEach((Element) => {
      const $el = $.create('div', Element.className);
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
