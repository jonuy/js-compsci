function Stack(_n) {
  this.stack = Array();
}

Stack.prototype.populate = function(_n) {
  for (i = 0; i < _n; i++) {
    this.stack[i] = i;
  }
  return this.stack;
}

Stack.prototype.push = function(_val) {
  this.stack.push(_val);
  return this.stack;
}

Stack.prototype.pop = function() {
  this.stack.pop();
  return this.stack;
}

window.uy.stack = new Stack;