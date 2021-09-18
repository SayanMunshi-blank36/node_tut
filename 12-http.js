const http = require("http");

const server = http.createServer((req, res) => {
    // console.log(req);
    if(req.url === "/"){
        res.end("Welcome to our Home page")
    }else if(req.url === "/about"){
        res.end("Here is our short history")
    }else{
        res.end(`
            <h1>Oops!!</h1>
            <p>We can't find the page</p>
            <a href="/">Go Back To Home</a>
        `)
    }
});

server.listen(5000)