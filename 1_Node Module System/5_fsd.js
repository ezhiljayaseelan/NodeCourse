const fsd = require('fs')

//fsd.mkdirSync('Test')

let folderPath = 'C:\\Projects\\NodeJSProject\\1_Node Module System'

let folderContent = fsd.readdirSync(folderPath)

console.log(folderContent)

console.log(fsd.existsSync('1_cp.js'))

//fsd.rmdirSync('dir')