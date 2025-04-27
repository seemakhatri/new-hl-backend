import mongoose, { Document, Schema } from 'mongoose';

export interface IStockSplit extends Document {
    companyName: string;
  recordDate: Date;
  effectiveDate: Date;
  notes?: string;
}

const stockSplitSchema = new Schema<IStockSplit>({
  companyName: { type: String, required: true },
  recordDate: { type: Date, required: true },
  effectiveDate: { type: Date, required: true },
  notes: { type: String }
});

export const StockSplit = mongoose.model<IStockSplit>('StockSplit', stockSplitSchema);