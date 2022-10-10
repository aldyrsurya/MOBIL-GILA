const http = require("http");
const fs = require("fs");
const port = 1337;

const MIME_TYPES = {
  default: "application/octet-stream",
  html: "text/html; charset=UTF-8",
  js: "application/javascript; charset=UTF-8",
  css: "text/css",
  png: "image/png",
  jpg: "image/jpg",
  gif: "image/gif",
  ico: "image/x-icon",
  svg: "image/svg+xml",
};


function onRequest(req, res) {
  switch (req.url) {
    case "/":
      req.url = "index.html";
      break;
    case "/cars":
      req.url = "searchMobil.html";
      break;
  }

  let path = "public/" + req.url;
  fs.readFile(path, (err, data) => {
    res.writeHead(200);
    res.end(data);
  });
}

const server = http.createServer(onRequest);

server.listen(port, "localhost", () => {
  console.log(`Server UP! http://localhost:${port}/`);
});
