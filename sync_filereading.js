const fs = require('fs');
let content

try {
  content = fs.readFileSync('file.md', 'utf-8')
} catch (ex) {
  console.log(ex)
}

console.log("Content of file.md : ")
console.log(content)
