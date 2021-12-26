class Dom {
  constructor() {
  }
}

export function $() {
  return new Dom();
}

$.create = function(tagName, classes = '') {
  const el = document.createElement(tagName);

  if (classes) {
    el.classList.add(classes);
  }

  return el;
};
