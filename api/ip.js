export default function handler(req, res) {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  console.log(`IP capturada: ${ip}`);

  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(`
    <h1>Tu celular está siendo hackeado... 🤖</h1>
    <p>Es broma sólo tengo toda tu información</p>
  `);
}