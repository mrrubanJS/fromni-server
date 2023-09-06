import {buttonModel} from '../../models/buttonModel.js'

class ButtonCrud{
    constructor(){}

    async create(arr){
        try {
            const newButtons = await buttonModel.create(arr)
            return newButtons
        } catch (error) {
            throw error 
        }
    }
}

export default new ButtonCrud()