import { client } from './connection';

export async function getProducts(limit: number) {
  const { MONGODB_COLLECTION, MONGODB_DB } = process.env;
  const mongodb = await client.connect();

  const products = await mongodb.db(MONGODB_DB)
    .collection(MONGODB_COLLECTION || '')
    .find({}, { projection: { _id: 0 } })
    .limit(limit)
    .toArray()

  return products
}
