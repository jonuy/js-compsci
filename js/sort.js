function Sort() {
  this.counter = 0;
  this.maxNumber = 1000;
}

Sort.prototype.createUnsortedArray = function(_n) {
  var data = Array();
  for (i = 0; i < _n; i++) {
    data[i] = Math.floor(Math.random() * this.maxNumber);
  }

  return data;
}

Sort.prototype.bubbleSort = function(_unsorted, _debug) {
  if (_debug) {
    debugger;
  }

  this.counter = 0;
  var data = _unsorted;
  var length = _unsorted.length;
  var sortComplete = false;
  var startTime = (new Date).getTime();
  
  while(!sortComplete) {
    sortComplete = true;

    for (i = 0; i < length - 1; i++) {
      if (data[i] > data[i + 1]) {
        tmp = data[i];
        data[i] = data[i + 1];
        data[i + 1] = tmp;
        sortComplete = false;
      }

      this.counter++;
    }
  }

  var timeDuration = (new Date).getTime() - startTime;
  console.log('Sorted Array: ' + data);
  console.log('Iterations: ' + this.counter);
  console.log('Run Time: ' + timeDuration + 'ms');

  return data;
}

// In-place insertion sort
Sort.prototype.insertionSort = function(_unsorted, _debug) {
  if (_debug) {
    debugger;
  }

  this.counter = 0;
  var data = _unsorted;
  var length = _unsorted.length;
  var startTime = (new Date).getTime();

  for (i = 1; i < length; i++) {
    var checkVal = data[i];
    var j = i - 1;

    var inserted = false;
    while (j >= 0 && !inserted) {
      if (data[j + 1] >= data[j]) {
        inserted = true;
      }
      else {
        data[j + 1] = data[j];
        data[j] = checkVal;
        j = j - 1;
      }

      this.counter++;
    }
  }

  var timeDuration = (new Date).getTime() - startTime;
  console.log('Sorted Array: ' + data);
  console.log('Iterations: ' + this.counter);
  console.log('Run Time: ' + timeDuration + 'ms');

  return data;
}

Sort.prototype.quickSort = function(_unsorted, _debug) {
  if (_debug) {
    debugger;
  }

  this.counter = 0;
  var startTime = (new Date).getTime();

  // Choose initial left, right, and pivot index
  var lIdx = 0;
  var rIdx = _unsorted.length - 1;
  var pivotIdx = this.qs_choosePivot(lIdx, rIdx);

  var pivotNewIdx = this.qs_partition(_unsorted, lIdx, rIdx, pivotIdx);
  this.qs_recursive(_unsorted, lIdx, pivotNewIdx - 1);
  this.qs_recursive(_unsorted, pivotNewIdx + 1, rIdx);

  var timeDuration = (new Date).getTime() - startTime;

  // Array will now be sorted
  var sorted = _unsorted;

  console.log('Sorted Array: ' + sorted);
  console.log('Iterations: ' + this.counter);
  console.log('Run Time: ' + timeDuration + 'ms');

  return sorted;
}

Sort.prototype.qs_choosePivot = function(_leftIdx, _rightIdx) {
  // Optimizations can be made with the pivot choices. For this example, we're
  // just choosing halfway between 
  return _leftIdx + Math.floor((_rightIdx - _leftIdx) / 2);
}

Sort.prototype.qs_swap = function(_array, _idx1, _idx2) {
  var tmp = _array[_idx1];
  _array[_idx1] = _array[_idx2];
  _array[_idx2] = tmp;
}

Sort.prototype.qs_partition = function(_array, _leftIdx, _rightIdx, _pivotIdx) {
  var pivotVal = _array[_pivotIdx];

  // Swap value at pivot index with the right index
  this.qs_swap(_array, _pivotIdx, _rightIdx);

  var storeIdx = _leftIdx;

  for (i = _leftIdx; i <= _rightIdx - 1; i++) {
    if (_array[i] < pivotVal) {
      this.qs_swap(_array, i, storeIdx);
      storeIdx = storeIdx + 1;
    }
    this.counter++;
  }

  // Move pivot to final place
  this.qs_swap(_array, storeIdx, _rightIdx);

  return storeIdx;
}

Sort.prototype.qs_recursive = function(_array, _leftIdx, _rightIdx) {
  if (_leftIdx < _rightIdx) {
    var pivotIdx = this.qs_choosePivot(_leftIdx, _rightIdx);
    var pivotNewIdx = this.qs_partition(_array, _leftIdx, _rightIdx, pivotIdx);
    this.qs_recursive(_array, _leftIdx, pivotNewIdx - 1);
    this.qs_recursive(_array, pivotNewIdx + 1, _rightIdx);
  }
}

Sort.prototype.mergeSort = function(_unsorted, _debug) {
  if (_debug) {
    debugger;
  }
  
  this.counter = 0;
  var startTime = (new Date).getTime();

  var sorted = this.ms_sort(_unsorted);

  var timeDuration = (new Date).getTime() - startTime;

  console.log('Sorted Array: ' + sorted);
  console.log('Iterations: ' + this.counter);
  console.log('Run Time: ' + timeDuration + 'ms');

  return sorted;
}

Sort.prototype.ms_sort = function(_array) {
  if (_array.length <= 1)
    return _array;

  var left = Array();
  var right = Array();
  var mid = Math.floor(_array.length / 2);

  for (i = 0; i < mid; i++) {
    left.push(_array[i]);
  }
  for (i = mid; i < _array.length; i++) {
    right.push(_array[i]);
  }

  left = this.ms_sort(left);
  right = this.ms_sort(right);

  var merged = this.ms_merge(left, right);
  return merged;
}

Sort.prototype.ms_merge = function(_left, _right) {
  var result = Array();

  while (_left.length > 0 || _right.length > 0) {
    if (_left.length > 0 && _right.length > 0) {
      if (_left[0] <= _right[0]) {
        var l0 = _left.shift();
        result.push(l0);
      }
      else {
        var r0 = _right.shift();
        result.push(r0);
      }
    }
    else if (_left.length > 0) {
      var l0 = _left.shift();
      result.push(l0);
    }
    else if (_right.length > 0) {
      var r0 = _right.shift();
      result.push(r0);
    }

    this.counter++;
  }

  return result;
}

window.uy.sort = new Sort();