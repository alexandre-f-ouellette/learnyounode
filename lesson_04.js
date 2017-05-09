let fs = require('fs')
let path = process.argv[2]

fs.readFile(path, 'utf8', finishedReading)

function finishedReading(err, data) {
  if(err) return console.log(err)

  let count = data.split('\n').length - 1
  console.log(count)
}
