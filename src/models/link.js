import { Schema, model } from 'mongoose';

const linkSchema = new Schema({
  originallink: { type: String, required: true },
  newlink: { type: String, required: true }
});

export const Link = model('Link', linkSchema);


