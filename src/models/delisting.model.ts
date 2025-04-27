import mongoose, { Document, Schema } from 'mongoose';

export interface IDelisting extends Document {
  companyName: string;
  exDate: Date;
  paymentDate: Date;
  notes?: string;
}

const delistingSchema = new Schema<IDelisting>({
  companyName: { type: String, required: true },
  exDate: { type: Date, required: true },
  paymentDate: { type: Date, required: true },
  notes: { type: String },
});

export const Delisting = mongoose.model<IDelisting>('Delisting', delistingSchema);
