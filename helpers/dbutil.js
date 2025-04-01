import { MongoClient, ServerApiVersion } from "mongodb"

export const connectDatabase = async () => {
    const client = new MongoClient(process.env.MONGO_URL, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });
    await client.connect();

    return client
}

export const insertDocument = async (client, collection, document) => {
    const db = client.db()
    return await db.collection(collection).insertOne(document)
}

export const getAllDocuments = async (client, collection, sort, filter = {}) => {
    const db = client.db()
    const documents = await db.collection(collection).find(filter).sort(sort).toArray()
    return documents
}
