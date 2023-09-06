import mongoose from "mongoose";

const buttonSchema = new mongoose.Schema({
    text:{
        type: String,
        trim: true,
    },
    inline:{
        type: Boolean,
        default:false
    },
    link:{
        type: String,
        trim: true
    }
},
    {timestamps: true}
)

export const buttonModel =  mongoose.model('button', buttonSchema)