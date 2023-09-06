import express from "express";
import userMessageController from "./userMessage.controller.js";


const router = express.Router()


router.post('/', userMessageController.create)
router.get('/', userMessageController.get)
// router.delete('delete/:id', userMessageController.deleteMessage)
// router.put()

export default router