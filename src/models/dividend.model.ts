import mongoose, { Document, Schema } from 'mongoose';

export interface IDividend extends Document {
  companyName: string;
  exDate: Date;
  paymentDate: Date;
  notes?: string;
  withholdingTax?: number;
  dividendAmount?: number; 
}

const dividendSchema = new Schema<IDividend>({
  companyName: { type: String },
  exDate: { type: Date },
  paymentDate: { type: Date },
  notes: { type: String },
  withholdingTax: { type: Number },
  dividendAmount: { type: Number }
});

export const Dividend = mongoose.model<IDividend>('Dividend', dividendSchema);