import channelTypeCRUD from "./channelType.CRUD.js";

class ChannelTypeService{
    constructor(){

    }

    async create(newChannelObj){

            try {
                const newChannel = await channelTypeCRUD.create(newChannelObj)
                return newChannel
            } catch (error) {
                throw error
            }
    }
}


export default new ChannelTypeService()