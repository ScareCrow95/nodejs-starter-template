require('dotenv').config()

import http from 'http'
import mongoose from 'mongoose'
import api from './api/api.js'
import './utils/randomUtils'
import verboseLogging from './utils/veboseLogging'

async function startup() {
  const server = http.Server(api)

  await mongoose
    .connect(process.env.MONGODB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .catch((err) => {
      console.log(err)
    })
  server.listen(process.env.PORT, async () => {
    if (process.env.NODE_ENV !== 'production') verboseLogging()
  })

  console.log(`server started at ${process.env.PORT}`)
}
startup()
