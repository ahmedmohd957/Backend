import dotenv from 'dotenv'
dotenv.config()
import express from 'express'

const app = express()
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('Hello, world!')
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})