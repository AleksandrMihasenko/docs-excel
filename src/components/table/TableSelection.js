export class TableSelection {
  static className = '__selected';

  constructor() {
    this.group = [];
  }

  // $el instanceof Dom === true
  select($el) {
    this.clear();
    this.group.push($el);
    $el.addClass(TableSelection.className);
  }

  clear() {
    this.group.forEach(($el) => $el.removeClass(TableSelection.className));
    this.group = [];
  }

  selectGroup() {}
}
