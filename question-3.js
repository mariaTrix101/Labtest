const fs = require('fs')

const path = require('path');
//joins filepath within cross platform
const directory = path.join(__dirname, 'logs');
var files = fs.readdirSync(directory);
for (let file of files) {
    fs.unlinkSync(path.join(directory, file));
    console.log('deleted ' + file)
}

if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory);
}



let data = "COMP3133 Labtest1ß"

let i = 1;
while (i < 11) {
    fs.writeFileSync(path.join(directory, 'log' + i + '.txt'), data)
    console.log('created log' + i + '.txt')
    i++;
} 