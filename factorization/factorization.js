let readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function (line) {
  const inputNum = parseInt(line)
  console.log(factorization(inputNum))
  rl.close()
})

function factorization(inputNum) {
  let inputNumCopy = inputNum
  let factorArray = []
  let factor = 2

  //initial check: if number is even, turn it into an odd number first via continually dividing by 2
  // while (inputNumCopy % factor == 0) {
  //   factorArray.push(factor)
  //   inputNumCopy = inputNumCopy / factor
  // }

  // factor = 3

  const upperLimit = Math.sqrt(inputNum)

  while (factor < upperLimit && inputNumCopy / factor >= 1) {

    if (inputNumCopy % factor == 0) {
      factorArray.push(factor)
      inputNumCopy = inputNumCopy / factor
    } else {
      factor += 1
    }

  }

  // add the factor to the factorArray if inputNumCopy is > 2
  if (inputNumCopy > 2) {
    factorArray.push(inputNumCopy)
  } else if (factorArray.length == 0) {
    factorArray.push(inputNum)
  }

  return factorArray.join(' ')
}

let testCases = [10, 100, 3, -1, 13, 384589, 3425, 4285792]

testCases.forEach(item => {
  console.log(item)
  console.log(factorization(item))
  console.log('')
})
