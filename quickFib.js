const fibs = n => {

  if (n === 0 || n === 1) { return 1 }
  const fibNums = [1, 1];

  for (let i = 1; i < n; i++) {
    if (!fibNums[i + 1]) {fibNums[i + 1] = fibNums[i - 1] + fibNums[i] }

  }
  
  return fibNums[n - 1]

}

console.time('timer')
console.log(fibs(1476))
console.timeEnd('timer')
