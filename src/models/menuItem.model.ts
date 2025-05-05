import mongoose, { Schema, Document } from 'mongoose';

export interface IMenuItem extends Document {
  label: string;
  route: string;
}

const menuSchema = new Schema<IMenuItem>({
  label: { type: String, required: true },
  route: { type: String, required: true }
});

export const MenuItem = mongoose.model<IMenuItem>('MenuItem', menuSchema);
