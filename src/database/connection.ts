import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI || ''
const MONGODB_DB = process.env.MONGODB_DB

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local')
}

if (!MONGODB_DB) {
  throw new Error('Please define the MONGODB_DB environment variable inside .env.local')
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */

let cachedClient: any = null
let cachedDb: any = null

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb }
  }

  // const options = {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true
  // }

  const client = await MongoClient.connect(MONGODB_URI)
  // const client = await MongoClient.connect(MONGODB_URI, 
  // (_error: any, _results: any) => {}, options)

  const db = client.db(MONGODB_DB)

  cachedClient = client
  cachedDb = db

  return { client, db }
}

export const client = new MongoClient(MONGODB_URI, {

});

export async function mongoConnection() {
  const client = new MongoClient(MONGODB_URI)
  
  try {
    await client.connect()
    const db = client.db(MONGODB_DB)
    return {
      products: db.collection('productsAdidas')
      // other collections go here
    }
  } catch (error) {
    new Error('Something goes wrong on connecting to Mongo', { cause: error })
  }
}
