import { MongoClient } from "mongodb";

const uri = import.meta.env.DATABASE_URI;

const client = await MongoClient.connect(uri);

const db = client.db("Portfolio");

export default db;
