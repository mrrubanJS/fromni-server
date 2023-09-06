import mongoose from "mongoose"

const channelTypeSchema = new mongoose.Schema({
    type:{
        type:String,
        required: [true, 'Please add a channel type'],
        trim: true
    },
    maxSymbols:{
        type: Number
    },
    maxStandartButtons:{
        type: Number
    },
    maxButtonText:{
        type: Number
    },
    standartLink:{
        type: Boolean
    },
    maxInlineButtons:{
        type: Number
    },
    maxInlineButtonText:{
        type: Number
    },
    inlineLink:{
        type: Boolean
    },
    maxInlineLink:{
        type: Number
    }

}, {timestamps:true}
)

export const channelTypeModel = mongoose.model('channelType', channelTypeSchema)

