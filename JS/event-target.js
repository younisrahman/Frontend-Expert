class EventTarget {
  constructor() {
    this.listener = {};
  }

  addEventListener(name, callback) {
    if (!this.listener.hasOwnProperty(name))
      this.listener[name] = new Set([callback]);
    else this.listener[name].add(callback);
  }

  removeEventListener(name, callback) {
    this.listener[name]?.delete(callback);
  }

  dispatchEvent(name) {
    this.listener[name]?.forEach((callback) => {
      callback();
    });
  }
}
