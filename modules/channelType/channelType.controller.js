import channelTypeService from "./channelType.service.js";


class ChannelTypeController{
    constructor(){

    }

    async create(req, res, next){
            const newChannel = req.body
            try {
                const channel = await channelTypeService.create(req.body)
                res.status(201).json({
                    success:true,
                    channel
                })
            } catch (error) {
                next(error)
            }
    }
    async get(req, res, next){
        try {
            const channels = await channelTypeService.get()
            res.status(201).json({
                success:true,
                channels
            })
        } catch (error) {
            next(error)
        }
    }
}


export default new ChannelTypeController()