const http = require('http');

const myserver = http.createServer((req, res) => {
    console.log("server1");

    if (req.url === '/home') {
        res.end("ABES Engineering college");
    } 
    else if (req.url === '/about') {
        
        res.end("<html><head><title>About Us</title></head><body><img src='https://www.abes.ac.in/assets/Logo.png'></img></body></html>");

    }
    else if (req.url === '/contact') {
        res.end("Surya height apartment ghaziabad ");
    } 
    else {
        res.end("404 page not found");
    }
});

myserver.listen(8000, () => {
    console.log("Server is running on port 8000");
});
