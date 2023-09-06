import { messageModel } from "../../models/messageModel.js"

class UserMessageCRUD{
    constructor() {}
    async get(query){
        try {
            let messages;
      
            if (!query) {
              messages = await messageModel.find();
            } else {
              messages = await messageModel.find(query);
            }
      
            return messages;
        } catch (error) {
            throw error
        }
    }
    async getPopulated(category){
        try {
            const messages = await messageModel.find().populate(category);
            
            return messages;
        } catch (error) {
            throw error
        }
    }
    async create(message){
        try {
            const newMessage = await messageModel.create(message)

            return newMessage
        } catch (error) {
            throw error
        }
    }
    async delete(){
        try {
            
        } catch (error) {
            throw error
        }
    }
}

export default new UserMessageCRUD()