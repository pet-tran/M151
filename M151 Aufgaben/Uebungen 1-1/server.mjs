import { createServer } from 'http';
const server = createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html charset=utf-8' });
    let url = new URL(req.url, "https://" + req.headers.host);
    let name = url.searchParams.get("name");
    res.end(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1 style="color: green;">${name}</h1>
        <h1 style="color: green;">Hello 世界</h1>
    </body>
    </html>`);
});

server.listen(8080, () => {
  console.log(
    `Server is listening to http://localhost.${server.address().port}`
  );
});