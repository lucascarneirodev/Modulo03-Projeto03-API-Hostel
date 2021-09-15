const {MongoClient, ObjectId} = require("mongodb");
const dotenv = require("dotenv").config();

const connectionString = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.${process.env.DB_CHAR}.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const client = new MongoClient(connectionString, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
const db = client.db(process.env.DB_NAME);
const rooms = db.collection("rooms");

async function connect() {
  await client.connect();
  console.log("Connection established");
};

async function dbclose() {
  try {
    await client.close(false, () => console.log("Conection closed"));
  } catch (err) {
    await client.close(true, () => console.log("Conection forcelly closed"));
  }
}

module.exports = {client, dbclose, ObjectId, db, rooms, connect};
