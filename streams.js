const fs = require("fs");

const readableStream = fs.createReadStream("Hugefile.txt", "utf-8");
const writableStream = fs.createWriteStream("Hugefile1_copy.txt");

readableStream.on("data", (buffer) => {
    writableStream.write(buffer);
}); 

readableStream.on("end", () => {
    writeableStream.end();
});

readableStream.on("error", (err) => {
    console.log(err.message);
});
 