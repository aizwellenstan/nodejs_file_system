var fs = require(`fs`);

var things_to_write = `あくあ大天使`;

var data = fs.writeFileSync(`./files/file.txt`, things_to_write ,`utf8`, function(err) {
    if(err) throw err;
    console.log(`file written`);
});