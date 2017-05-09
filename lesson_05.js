let fs = require('fs')
let path = require('path')

let folderPath = process.argv[2]
let fileExtension = "." + process.argv[3]

fs.readdir(folderPath, finishedReading)

function finishedReading (err, list) {
  if(err) return console.error(err)

  list.forEach(printOutMatching)
}

function printOutMatching (item, index) {
  if(path.extname(item) === fileExtension) {
    console.log(item)
  }
}
