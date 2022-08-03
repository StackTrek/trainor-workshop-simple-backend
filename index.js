import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()
const PORT = 3000 // TODO: process.env later

const rants = []

app
  .use(cors())
  .use(bodyParser.json())
  .get('/', (request, response) => {
    response.json({ message: 'Hello world' })
  })
  .get('/rants', (request, response) => {
    response.json(rants)
  })
  .post('/rants', (request, response) => {
    const newRant = { id: rants.length, ...request.body }
    rants.push(newRant)
    response.json(newRant)
  })
  .listen(PORT, () => {
    console.log(`Server has started on http://localhost:${PORT}`)
  })
