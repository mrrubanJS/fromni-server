import {channelTypeModel} from '../../models/channelTypeModel.js'

class ChannelTypeCRUD{
    constructor(params) {
        
    }

    async create(channelObj){
        try {
            const newChannelType = await channelTypeModel.create(channelObj)
            return newChannelType
        } catch (error) {
            throw error
        }
    }

    async get(query){
        try {
            let channels;
      
            if (!query) {
              channels = await channelTypeModel.find();
            } else {
              channels = await channelTypeModel.find(query);
            }
      
            return channels;
          } catch (error) {
            throw error;
          }
    }
}

export default new ChannelTypeCRUD()