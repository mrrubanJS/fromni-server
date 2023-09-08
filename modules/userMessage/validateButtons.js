import { ErrorResponse } from '../../core/utils/errorResponse.js';
export function validateButtons(buttonsArr, limitsObj) {
  const arrOfStandart = buttonsArr.filter((item) => !item.inline);
  const arrOfInline = buttonsArr.filter((item) => item.inline);
  const arrOfStandartLink = buttonsArr.filter((item) => item.link && !item.inline);
  const arrOfInlineLink = buttonsArr.filter((item) => item.link && item.inline);
   
    if(limitsObj.maxStandartButtons < arrOfStandart.length && limitsObj.maxStandartButtons !== undefined){
        throw new ErrorResponse('Превышен лимит кнопок стандартного отображения', 400)
    }
    if(limitsObj.maxButtonsText < findMaxValue(arrOfStandart) && limitsObj.maxButtonsText !== undefined){
        throw new ErrorResponse('Превышен лимит текста кнопок стандартного отображения', 400)
    }
    if(arrOfStandartLink.length > 0 && !limitsObj.standartLink){
        throw new ErrorResponse('Использование кнопок-ссылок стандартного отображения недоступно', 400)
    }
    if(limitsObj.maxInlineButtons < arrOfInline.length && limitsObj.maxInlineButtons !== undefined){
        throw new ErrorResponse('Превышен лимит кнопок  inline-отображения', 400)
    }
    if(limitsObj.maxInlineButtonsText < findMaxValue(arrOfInline) && limitsObj.maxInlineButtons !== undefined){
        throw new ErrorResponse('Превышен лимит текста кнопок  inline-отображения', 400)
    }
    if(arrOfInlineLink.length > 0 && !limitsObj.inlineLink){
        throw new ErrorResponse('Использование кнопок-ссылок inline-отображения недоступно', 400)
    }
    if(arrOfInlineLink.length >  limitsObj.maxInlineLink){
        throw new ErrorResponse('Превышен лимит кнопок-ссылок inline-отображения', 400)
    }

    return true
}

const button = {
  text: 'wefwfweffe',
  inline: false,
};
const button2 = {
  text: 'wefwfweffewevwev',
  inline: false,
};
const button3 = {
  text: 'wefw',
  inline: false,
  link: undefined,
};

function findMaxValue(arr) {
  const maxValue = arr.reduce(function (acc, cur) {
    if (cur.text.length >= acc) {
      acc = cur.text.length;
    }

    return acc;
  }, 0);

  return maxValue;
}
// maxStandartButtons: 10,
// maxButtonsText: 20,
// standartLink: false,
// maxInlineButtons: 3,
// maxInlineButtonsText: 20
// inlineLink: true,
// maxInlineLink:1
