import clientPromise from 'lib/mongodb';

export async function getSales() {
  const client = await clientPromise;
  const db = client.db('example');
  const collection = db.collection('sales');

  const res = await collection.find().sort({ _id: 1 }).toArray();

  return res;
}
