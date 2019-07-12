var fs = require(`fs`);

var data = fs.readFileSync(`./files/file.txt`, `utf8`);
console.log(data);