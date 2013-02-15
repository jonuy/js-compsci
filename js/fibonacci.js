function fibonacci(n, debug) {
  if (debug)
    debugger;

  if (n <= 1) {
    return n;
  }
  else {
    return fibonacci(n - 1, debug) + fibonacci(n - 2, debug);
  }
}

window.uy.fibonacci = fibonacci;