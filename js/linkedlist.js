function LinkedList() {
  this.head = null;
}

LinkedList.prototype.add = function(_data, _debug) {
  if (_debug)
    debugger;

  var node = {
    data: _data,
    next: null,
  };

  if (this.head === null) {
    this.head = node;
  }
  else {
    current = this.head;
    while (current.next !== null) {
      current = current.next;
    }

    current.next = node;
  }

  return this.print();
};

LinkedList.prototype.clear = function() {
  this.head = null;
  return this.print();
}

LinkedList.prototype.print = function() {
  if (this.head === null) {
    return 'List is empty.';
  }
  else {
    current = this.head;
    list = current.data;
    while(current.next) {
      current = current.next;
      list += ', ' + current.data;
    }

    return list;
  }
};

window.uy.linkedlist = new LinkedList;

