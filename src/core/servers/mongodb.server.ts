import { MongoClient, Db } from 'mongodb';

// exportar cliente de mongo instanciando
export let db:Db;

export const connectToDBServer = async (connectionURY:string) => {

    const client = new MongoClient(connectionURY);
    await client.connect();

    db = client.db()
}