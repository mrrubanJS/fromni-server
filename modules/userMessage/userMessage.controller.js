import userMessageService from "./userMessage.service.js";

class UserMessageController{
    constructor(params) {
        
    }
    async create(req, res, next){
        try {
            const messageObj = req.body
            const newMessage = await userMessageService.create(messageObj)

            res.status(201).json({
                success:true,
                newMessage
            })

        } catch (error) {
            next(error)
        }
    }
    async get(req, res, next){
        try {
            const messages = await userMessageService.getMessage()
            res.status(201).json({
                success:true,
                messages
            })
        } catch (error) {
            next(error)
        }
    }
    async delete(req, res, next){
        try {
            
        } catch (error) {
            next(error)
        }
    }
}

export default new UserMessageController()