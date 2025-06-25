export default function handler(req, res) {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  console.log(`IP capturada: ${ip}`);

  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(`
    <html>
    <head>
      <style>
        body {
          margin: 0;
          height: 100vh;
          background-image: url('https://files.catbox.moe/c7nb5m.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: Arial, sans-serif;
        }
        .container {
          background-color: rgba(0, 0, 0, 0.6); /* fondo negro semi-transparente */
          padding: 2rem 4rem;
          border-radius: 12px;
          text-align: center;
          color: white;
          box-shadow: 0 0 15px rgba(0,0,0,0.5);
        }
        h1 {
          font-size: 4rem;
          margin: 0 0 0.5em 0;
        }
        p {
          font-size: 2rem;
          margin: 0;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Tu celular está siendo hackeado... 🤖</h1>
        <p>Es broma sólo tengo toda tu información</p>
      </div>
    </body>
    </html>
  `);
}