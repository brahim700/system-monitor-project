const http=require("node:http")
const path=require("node:path")
const fs=require("node:fs")
const EventEmitter=require("node:events")
const emitter=new EventEmitter
const PORT=3000
emitter.on("request Recierve",( method, url)=>{
    console.log(`[REQUEST] : ${method} ${url}`);
})

const server=http.createServer((req,res)=>{
emitter.emit("request Recierve",req.method,req.url)

if (req.url=="/" && req.method==="GET") {

    res.setHeader("Content-Type","text/html")
    res.end(`

        <!DOCTYPE html>
        <html>
        <head>
          <title>System Monitor</title>

          <link
            rel="stylesheet"
            href="/style.css"
          />
        </head>

        <body>
          <h1>System Monitor</h1>

          <p>
            Node Process ID:
            ${process.pid}
          </p>

          <a href="/api/system">
            View System JSON
          </a>
        </body>
        </html>
        `)
}

if (req.url==="style.css" && req.method==="GET") {
    res.setHeader("Content-Type", "text/css");
    const csspath=path.join(__dirname,"public","style.css")
    return fs.readFile(csspath,"utf-8",(css, err)=>{
        if (err) {
            res.statusCode=500
            res.setHeader("Content-Type", "text/plain")
            return res.end("Cannot load CSS");
        }
        res.end(css)
    })
}
})
server.listen(PORT)

