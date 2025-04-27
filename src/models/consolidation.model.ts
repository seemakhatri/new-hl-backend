import mongoose, { Document, Schema } from 'mongoose';

export interface IConsolidation extends Document {
  companyName: string;
  recordDate: Date;
  effectiveDate: Date;
  notes?: string;
}

const consolidationSchema = new Schema<IConsolidation>({
  companyName: { type: String, required: true },
  recordDate: { type: Date, required: true },
  effectiveDate: { type: Date, required: true },
  notes: { type: String },
});

export const Consolidation = mongoose.model<IConsolidation>('Consolidation', consolidationSchema);
