import { MongoClient } from "mongodb";
const url = "mongodb://127.0.0.1:27017/";
const client = new MongoClient(url);
client
    .connect()
    .then((res) => console.log("db connected"))
    .catch((err) => console.log(err));
const db = client.db("userdb");
const collection = db.collection("Users");

export default collection;
