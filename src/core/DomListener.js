export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error(`$root is undefined`);
    }
    this.$root = $root;
    this.$listeners = listeners;
  }

  initDomListeners() {
    console.log(this.$listeners);
  }

  removeDomListeners() {}
}
