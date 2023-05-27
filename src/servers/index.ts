import { createServer } from "http";

const HOST = "localhost";
const PORT = 8000;

const server = createServer((request, response) => {
    if (request.method === "POST") {
        let body = '';
        request.on('data', chunk => {
            body += chunk;
        });
        request.on('close', () => {
            if (request.headers['content-type'] === 'application/json') {
                body = JSON.parse(body)
            }
            console.log(body);
        });
        response.writeHead(201);
        response.end('OK');
    } else {
        response.writeHead(200);
        response.end("Hello");
    }
});

server.listen(PORT, HOST, () => {
    console.log(`Server on ${HOST}:${PORT}`);
});