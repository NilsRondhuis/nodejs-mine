// create http module
const http = require("http");
const fs = require("fs").promises;

//define port
const PORT = 8081;

//define handler request
//request sent user
//respone answer for user
const requestHeader = async (request, response) => {
  const manifest = await fs.readFile("./package.json", "utf-8");
  response.writeHead(200, { "Content-type": "text/json" });
  return response.end(manifest);
};

// const requestHeader = (request, response) => {
//   if (request.url.includes("/home")) {
//     response.writeHead(200, { "Content-type": "text/json" });
//     return response.end('{"url": "homepage"}');
//   }
//   response.writeHead(200, { "Content-type": "text/json" });
//   return response.end('{"url": "other"}');

//   it's the same
//     response.write("<h1>Hello word</h1>");
//     response.end();
// };

//create server with handler
const server = http.createServer(requestHeader);

//launch server on defined port
server.listen(PORT, (err) => {
  if (err) {
    console.error("Error on server launch:", err);
  }
  console.log(`Server works on port ${PORT}`);
});
