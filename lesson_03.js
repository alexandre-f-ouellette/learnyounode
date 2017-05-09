let fs = require('fs')
let path = process.argv[2]

let string = fs.readFileSync(path).toString()

let count = string.split('\n').length - 1

console.log(count);
