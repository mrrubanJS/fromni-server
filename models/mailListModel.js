import mongoose from "mongoose";

const {objectId} = mongoose.Schema

const mailListSchema = new mongoose.Schema({
    contacts:[{type: String}],
    messageIds:[{type: objectId, ref: 'message'}]
})

export const mailListModel = mongoose.model('mailList', mailListSchema)