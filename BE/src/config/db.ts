import mongoose from 'mongoose';

export async function connectDb(mongoUri: string): Promise<void> {
  mongoose.set('strictQuery', true);

  mongoose.connection.on('connected', () => {
    // eslint-disable-next-line no-console
    console.log('[BE] MongoDB connected');
  });

  mongoose.connection.on('error', (error: unknown) => {
    // eslint-disable-next-line no-console
    console.error('[BE] MongoDB connection error:', error);
  });

  await mongoose.connect(mongoUri);
}
