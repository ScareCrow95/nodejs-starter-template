import cors from 'cors'
import express, { json } from 'express'
import helmet from 'helmet'
import morgan from 'morgan'

const api = express()

api.use(helmet())
api.use(cors())

morgan.token('body', (req, _res) => JSON.stringify(req.body))

api.use(
  morgan(
    ':method :url :status :response-time ms - :res[content-length] :body - :req[content-length]'
  )
)

api.use(json())

api.get('/', (req, res) => {
  res.send('shorturl.at/hqCK0')
})

api.post('/totalmessage', (req, res) => {
  console.log(req.body)
  res.send(200)
})

api.post('/setisingame', (req, res) => {
  console.log(req.body)
  res.send(200)
})

api.post('/setobservingplayer', (req, res) => {
  console.log(req.body)
  res.send(200)
})

api.post('/setkillinfo', (req, res) => {
  console.log(req.body)
  res.send(200)
})

api.post('/setgameglobalinfo', (req, res) => {
  console.log(req.body)
  res.send(200)
})

api.post('/setcircleinfo', (req, res) => {
  console.log(req.body)
  res.send(200)
})

api.post('/setteamreportdata', (req, res) => {
  console.log(req.body)
  res.send(200)
})

api.post('/setplayerreportdata', (req, res) => {
  console.log(req.body)
  res.send(200)
})

export default api
