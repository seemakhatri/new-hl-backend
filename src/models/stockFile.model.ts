import mongoose, { Document, Schema } from 'mongoose';

export interface IStockFile extends Document {
    stockName: string;
    isin: string;
    sedolOrTicker: string;
    status: 'pending' | 'approved' | 'rejected';
    rejectionReason?: string;
}

const stockFileSchema = new Schema<IStockFile>({
    stockName: { type: String, required: true },
    isin: { type: String, required: true },
    sedolOrTicker: { type: String, required: true },
    status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
    rejectionReason: { type: String },
});

export const StockFile = mongoose.model<IStockFile>('StockFile', stockFileSchema);