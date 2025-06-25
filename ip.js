export default function handler(req, res) {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  // Guardar en logs en Vercel (no puedes usar fs para guardar archivos)
  console.log(`IP: ${ip} - ${new Date().toISOString()}`);

  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(`
    <h1>Tu celular está siendo hackeado... 🤖</h1>
    <p>Es broma 😅</p>
  `);
}