import mongoose from 'mongoose';

const { ObjectId } = mongoose.Schema;

const messageSchema = new mongoose.Schema({
    text: {
      type: String,
      trim: true,
      required: [true, 'please add a text'],
    },
    channelType: [{ type: ObjectId, ref: 'channelType' }],
    button: [{ type: ObjectId, ref: 'button' }],
  },
  { timestamps: true }
);

export const messageModel = mongoose.model('message', messageSchema)