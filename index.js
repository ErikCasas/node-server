
const http = require ("http");
// const http = required ("http");


const PORT = 8080
const server = http.createServer((req, resp) => {
    if(req.method=== "GET" && req.url==="/users"){
        console.log("");
        resp.end("")
    }

})

server.listen(PORT, console.log("the server its alive!"))
// server.listen(PORT, ()console.log()) ==>Error de sintaxis


//Al correr los comandos de inicio te daban error basicamente, porque no los habias creado
//Tenias solamente : 
    // "test": "echo \"Error: no test specified\" && exit 1"