import http from 'http';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        const homePage = `
            <!DOCTYPE html>
            <html lang="en">
                <h1>Welcome to the Home Page</h1>
            </html>
        `;

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(homePage);
    }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
