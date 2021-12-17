export class DomListener {
  constructor($root) {
    if (!$root) {
      throw new Error(`$root is undefined`);
    }
    this.$root = $root;
  }
}
