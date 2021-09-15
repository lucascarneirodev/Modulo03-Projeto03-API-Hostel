const { client, dbclose, ObjectId, db, rooms,connect } = require("../database/connections");

const home = async (req, res) => {
  res.json({ info: "Olá, Blue" });
};

exports.listRooms = async (req, res) => {
  await connect();
  const listAll = await rooms.find({}).toArray();
  listAll
    ? res.status(200).json(listAll) && dbclose();
    : res.status(404).json({ error: "Rooms not found" }) && dbclose();
};

exports.listRoomById = async (req, res) => {
  const id = req.params.id;
  const listById = await rooms.findOne({ _id: ObjectId(id) });;
  // await dbclose()
  if (!listById) {
    res.status(404).json({ error: "Room not found" });
    return;
  };
  dbclose();
  res.status(200).json(listById);
};

exports.createRoom = async (req,res) => {
  await connect();
  const newRoom = req.body;
}