import userMessageCRUD from "./userMessage.CRUD.js"
import { validateMessage } from "./validateMessage.js"
import buttonsCRUD from "../button/button.CRUD.js"
class UserMessageService{
    constructor(){}
    async create(messageObj){
        try {
            if( await validateMessage(messageObj)){
              
                const newButtons = await buttonsCRUD.create(messageObj.button)
                // let newButtonsIds = []
                // newButtons.forEach(element => {
                //      newButtonsIds.push(element._id)
                // });
                const newMessage = {...messageObj, button: newButtons}

                const savedMessage = await userMessageCRUD.create(newMessage)

              return savedMessage
            }

            // return await validateMessage(messageObj)
        } catch (error) {
            throw error
        }
    }
    async getMessage(){
        try {
            const messages = await userMessageCRUD.getPopulated("button")
            return messages
        } catch (error) {
            throw error
        }
    }
    async deleteMessage(){
        try {
            
        } catch (error) {
         throw error   
        }
    }
}

export default new UserMessageService()