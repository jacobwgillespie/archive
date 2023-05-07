const obj = {}

// obj.aFunction = () => 1
obj.something = 2
obj['something'] = 2

obj['something'] === obj.something

function test() {
  // something
}

obj[test] = 5
console.log(obj[test])

obj['a missing key'] // => undefined


const countOfValues = {}
const arr = [1, 2, 3, 4, 4, 5]
arr.forEach(val => {
  countOfValues[val] = (countOfValues[val] || 0) + 1
})

Object.keys(countOfValues)   // => [1, 2, 3, 4, 5]
Object.values(countOfValues) // => [1, 1, 1, 2, 1]

const pairs = Object.entries(countOfValues)

let largestIdx = 0
let largestNum = 0
for (const pair of pairs) {
  if (pair[1] > largestNum) {
    largestNum = pair[1]
    largestIdx = pair[0]
  }
}

// pairs sorted by the second number, so the first pair has the largest number
const largestIdx = pairs.sort((a, b) => b[1] - a[1])[0][0]

countOfValues[2] = undefined

// delete is slow
delete countOfValues[2]
