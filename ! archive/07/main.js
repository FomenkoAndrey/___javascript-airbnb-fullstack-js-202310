function isPrime(element) {
  let start = 2
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false
    }
  }
  return element > 1
}

console.log([ 4, 3, 6, 7, 8, 12 ].find(isPrime))
console.log([ 4, 5, 8, 12 ].find(isPrime))
