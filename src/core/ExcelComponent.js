import {DomListener} from '@core/DomListener';

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || '';
    this.store = options.store;
    this.emitter = options.emitter;
    this.unsubscribers = [];
    this.storeSub = null;

    this.prepare();
  }

  // setup component before init
  prepare() {}

  // return component layout
  toHTML() {
    return '';
  }

  // facade pattern, notify listeners about event
  $emit(event, ...args) {
    this.emitter.emit(event, ...args);
  }

  // subscribe on event
  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn);
    this.unsubscribers.push(unsub);
  }

  // initialize component, add dom listeners
  init() {
    this.initDomListeners();
  }

  // delete component, clear listeners
  destroy() {
    this.removeDomListeners();
    this.unsubscribers.forEach((unsub) => unsub());
    this.storeSub.unsubscribe();
  }

  // subscribe on events in store
  $subscribe(fn) {
    this.storeSub = this.store.subscribe(fn);
  }

  // push events to store
  $dispatch(action) {
    this.store.dispatch(action);
  }
}
