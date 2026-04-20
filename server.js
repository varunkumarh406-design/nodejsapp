const http  = require("http");

const server = http.createServer((req,res) =>{
    console.log(req.url);
    if (req.url === "/") {
        res.end("hello world");
    }
    else if (req.url === "/contact") {
        res.end("this is the contact page");
    }
    else if (req.url === "/about") {
        res.end("this is the about page");
    }
    else {
        res.end("page not found");
    }
});

server.listen(3007, () => {
    console.log("server is running on port 3007");
}); 

