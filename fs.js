const fs = require("fs");

// if (!fs.existsSync("docs")) {
//     fs.mkdir("docs", (err) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log("Directory created");
//         }
//     });
// } else {
//     console.log("Directory already exists");
// }
// fs.writeFile("docs/file.txt", "Hello World", (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("File created");
//     }
// });
//readfile
// fs.readFile("docs/file.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.log(err.message);
//     } else {
//         console.log(data.toString());
//     }
// });
//delete file
// if (fs.existsSync("docs/file.txt"))
// fs.unlink("docs/file.txt", (err) => {
//     if (err) {
//         console.log(err.message);
//     } else {
//         console.log("File deleted");
//     }
// });
if (fs.existsSync("docs/"))
fs.rmdir("docs/", { recursive: true }, (err) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log("File deleted");
    }
});