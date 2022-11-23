import clientPromise from 'lib/mongodb';

export async function getPosts() {
  const client = await clientPromise;
  const db = client.db('gomawa');
  const collection = db.collection('posts');

  const res = await collection.find().toArray();

  return res;
}
