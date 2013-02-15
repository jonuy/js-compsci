function Queue() {
  this.queue = Array();
}

Queue.prototype.populate = function(_n) {
  for (i = 0; i < _n; i++) {
    this.queue[i] = i;
  }
  return this.queue;
}

Queue.prototype.enqueue = function(_val) {
  this.queue.push(_val);
  return this.queue;
}

Queue.prototype.dequeue = function() {
  this.queue.shift();
  return this.queue;
}

window.uy.queue = new Queue;