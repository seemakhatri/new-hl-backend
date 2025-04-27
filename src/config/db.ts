import mongoose from 'mongoose';

export const connectDB = async (): Promise<void> => {
  try {
    const dbUri = process.env.MONGO_URI as string;
    if (!dbUri) {
      throw new Error('MONGO_URI is not defined in .env');
    }
    await mongoose.connect(dbUri);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1);
  }
};
