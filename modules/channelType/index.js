import express from 'express'
import channelTypeController from './channelType.controller.js'

const router = express.Router()

router.post('/', channelTypeController.create)


export default router