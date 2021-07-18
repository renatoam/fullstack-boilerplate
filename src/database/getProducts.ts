import { handleNormalizeObject } from 'src/common/helpers/handleObject'
import { connectToDatabase } from '.'

export async function getProducts(limit: number) {
  const { db, client } = await connectToDatabase()

  if (!client.isConnected()) {
    return Error('Client database is not connected!')
  }

  const products = await db
    .collection('adidasProducts')
    .find({}, { projection: { _id: 0 } })
    .limit(limit)
    .toArray()

  return handleNormalizeObject(products)
}
