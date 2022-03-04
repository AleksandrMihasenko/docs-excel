export class TableSelection {
  static className = '__selected';

  constructor() {
    this.group = [];
    this.current = null;
  }

  // $el instanceof Dom === true
  select($el) {
    this.clear();
    this.group.push($el);
    this.current = $el;
    $el.addClass(TableSelection.className);
  }

  clear() {
    this.group.forEach(($el) => $el.removeClass(TableSelection.className));
    this.group = [];
  }

  selectGroup($group = []) {
    this.clear();
    this.group = $group;

    this.group.forEach(($el) => $el.addClass(TableSelection.className));
  }
}
