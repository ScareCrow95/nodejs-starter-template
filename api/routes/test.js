import { Router } from 'express'
import testService from '../../services/test/testService'
import handleRequest from '../handleRequest'

const router = Router()

router.post('/add', (req, res) => {
  handleRequest(req, res, testService)
})

export default router
