function BigO() {
  this.maxNumber = 10;
}

BigO.prototype.generateData = function(_n, _m) {
  var data = Array();
  for (i = 0; i < _n; i++) {
    if (_m) {
      data[i] = Array();
      for (j = 0; j < _m; j++) {
        data[i][j] = Math.floor(Math.random() * this.maxNumber);
      }
    }
    else {
      data[i] = Math.floor(Math.random() * this.maxNumber);
    }
  }

  return data;
}

BigO.prototype.logValue = function(_value, _counter) {
  console.log(_value);
  _counter++;
  return _counter;
}

BigO.prototype.constant = function(_n, _debug) {
  if (_debug)
    debugger;

  var data = this.generateData(_n);
  var counter = 0;

  counter = this.logValue(data[0], counter);

  return 'End counter: ' + counter;
}

BigO.prototype.linear = function(_n, _debug) {
  if (_debug)
    debugger;

  var data = this.generateData(_n);
  var counter = 0;

  for (i = 0; i < data.length; i++) {
    counter = this.logValue(data[i], counter);
  }

  return 'End counter: ' + counter;
}

BigO.prototype.exponential = function(_n, _m, _debug) {
  if (_debug)
    debugger;

  var data = this.generateData(_n, _m);
  var counter = 0;

  for (i = 0; i < data.length; i++) {
    for (j = 0; j < data[i].length; j++) {
      counter = this.logValue(data[i], counter);
    }
  }

  return 'End counter: ' + counter;
}

window.uy.bigo = new BigO;