require('dotenv').config()

import http from 'http'
import api from './api/api.js'
import initSocket from './socket/initSocket.js'
import './utils/randomUtils'
import verboseLogging from './utils/veboseLogging'

async function startup() {
  const server = http.Server(api)
  initSocket()
  server.listen(process.env.PORT, async () => {
    if (process.env.NODE_ENV !== 'production') verboseLogging()
  })

  console.log(`server started at ${process.env.PORT}`)
}
startup()
