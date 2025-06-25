import express from 'express'
import fs from 'fs'

const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
  const log = `IP: ${ip} - ${new Date().toISOString()}\n`
  fs.appendFileSync('ips.txt', log)
  res.send(`<h1>Tu celular está siendo hackeado... 🤖</h1><p>Es broma 😅</p>`)
})

app.listen(PORT, () => {
  console.log(`Servidor activo en http://localhost:${PORT}`)
}) 





