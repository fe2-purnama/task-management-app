const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Selamat Datang')
})

app.listen(port, () => {
  console.log(`Server ini berjalan di http://localhost:${port}`)
})
