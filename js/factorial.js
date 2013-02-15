function factorial(n, debug) {
  if (debug)
    debugger;

  if (n > 1)
    return n * factorial(n - 1, debug);
  else
    return n;
}

window.uy.factorial = factorial;