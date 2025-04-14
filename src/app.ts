import http from "http";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config(); // Load environment variables from .env

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    const homePage = `
            <html>
                <head>
                    <title>My First Page</title>
                    <link rel="stylesheet" href="/public/css/styles.css"/>
                </head>
                <div class="app__message">
                    <h1>Hello World</h1>
                </div>
            </html>
        `;

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(homePage);
  } else if (req.url === "/public/css/styles.css") {
    fs.readFile("./public/css/styles.css", (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("CSS file not found");
        return;
      }
      res.writeHead(200, { "Content-Type": "text/css" });
      res.end(data);
    });
  }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
