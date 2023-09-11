const fs = require('fs')

let fileContent = fs.readFileSync('f1.txt')

console.log(fileContent.toString('utf8'))

//fs.writeFileSync('f1.txt', 'Writing Test')

fs.appendFileSync('f1.txt', ' Uppend Test')

//fs.unlinkSync('f1.txt')