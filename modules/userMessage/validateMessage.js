// import buttonCRUD from '../button/button.CRUD.js'
import { ErrorResponse } from '../../core/utils/errorResponse.js'
import channelTypeCRUD from '../channelType/channelType.CRUD.js'
import { validateButtons } from './validateButtons.js'

export async function validateMessage(messageObj){
    try {
        const {channelType} = messageObj
        const channels = await channelTypeCRUD.get({_id: channelType})

        const limitations = findChannelLimitation(channels)

        console.log("text", messageObj.text);
        console.log("limit", limitations.maxSymbols);
        console.log( validateButtons(messageObj.button, limitations));

        if((messageObj.text.length <= limitations.maxSymbols) && validateButtons(messageObj.button, limitations)){
            return true
        }else{
            throw new ErrorResponse('invalid message', 400)
        }
    } catch (error) {
        throw error
    }
}


const findMinLimit = (arr, key) => {
    const min = arr.reduce((acc, item) => {
        switch (typeof(item[key])){
            case "number":
                if (item[key] <= acc) {
                        acc = item[key];
                      }
                      break;
            case "boolean":
                if(typeof(acc)!=='boolean'|| !item[key]){
                    acc = item[key]
                }
                break
        }
      return acc;
    }, 5000);
  
    return min;
};

export function findChannelLimitation(channelArr) {
    let compareResult = [];
    channelArr.forEach((element) => {
      let { maxSymbols, maxStandartButtons, maxButtonsText, standartLink, maxInlineButtons, maxInlineButtonsText, inlineLink, maxInlineLink} = element;
      compareResult.push({ maxSymbols, maxStandartButtons, maxButtonsText, standartLink, maxInlineButtons, maxInlineButtonsText, inlineLink,  maxInlineLink});
    });
    
    const limit = {}
   compareResult.map((element) => {

      Object.keys(element).forEach((key) => {
        const minValue = findMinLimit(channelArr, key);
        limit[key] = minValue
  
      });
    });
  
    return limit;
  }


const vk = {
    maxSymbols: 4096,
    maxStandartButtons: 40,
    standartLink: true,
    maxInlineButtons: 10,
    inlineLink: true,
    
}
const whatsup = {
    maxSymbols: 1000,
    maxStandartButtons: 10,
    maxButtonsText:20,
    standartLink: false,
    maxInlineButtons: 3,
    maxInlineButtonsText:20,
    inlineLink: true,
    
}

const telegram = {
    maxSymbols: 4096,
    standartLink: false,
    maxInlineButtonsText:64,
    inlineLink: true,
}
const test = [vk, whatsup, telegram]

// console.log(compare(test) ,2);