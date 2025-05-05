import mongoose, { Document, Schema } from 'mongoose';

export interface IFundFile extends Document {
    fundName: string;
    isin: string;
    sedolOrTicker: string;
    status: 'pending' | 'approved' | 'rejected';
    rejectionReason?: string;
}

const fundFileSchema = new Schema<IFundFile>({
    fundName: { type: String, required: true },
    isin: { type: String, required: true },
    sedolOrTicker: { type: String, required: true },
    status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
    rejectionReason: { type: String },
});

export const FundFile = mongoose.model<IFundFile>('FundFile', fundFileSchema);