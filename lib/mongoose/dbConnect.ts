import { PostSchema } from 'models/Post';
import mongoose from 'mongoose';
import { NextApiRequest, NextApiResponse } from 'next';

// const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_URI =
  'mongodb+srv://admin:Wkwkdaus1!@cluster0.rgwepib.mongodb.net/';

const dbConnect = async (
  req: NextApiRequest,
  res: NextApiResponse,
  next: Function,
) => {
  if (!global.mongoose) {
    global.mongoose = await mongoose.connect(MONGODB_URI, {
      dbName: 'gomawa',
    });
    mongoose.model('Post', PostSchema);
  }

  return next();
};

export default dbConnect;
