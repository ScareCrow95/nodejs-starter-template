import mongoose, { Schema } from 'mongoose'

const TestSchema = new Schema(
  {
    _id: String,
    data: { type: String, default: '' },
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
    toJSON: { getters: true },
  }
)

export const TestModel = mongoose.model('test', TestSchema, 'test')
