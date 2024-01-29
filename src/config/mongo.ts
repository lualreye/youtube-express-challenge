import mongoose from 'mongoose';

async function dbConnect(): Promise<void> {
  try {
    let DB_URI = process.env.DB_URI;

    if (!DB_URI) {
      throw new Error('NO DB URI');
    }

    await mongoose.connect(DB_URI);
    console.log('*** DATABASE CONNECTION SUCCESS ***')
  } catch (error: any) {
    console.log('error', error)
    console.log('*** DATABASE CONNECTION FAILED ***')
  }
}

export default dbConnect;