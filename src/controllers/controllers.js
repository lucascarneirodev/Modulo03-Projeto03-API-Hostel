const {
  client,
  dbclose,
  ObjectId,
  db,
  rooms,
  connect,
} = require("../database/connections");

exports.home = async (req, res) => {
  res.send("<h1>Hello World!</h1>");
};

exports.listRooms = async (req, res) => {
  await connect();
  const listAll = rooms.find({});

  const listAllArray = await listAll.toArray();
  listAllArray
    ? res.status(200).json(listAllArray) && dbclose()
    : res.status(404).json({ error: "Rooms not found" }) && dbclose();
};

exports.listRoomById = async (req, res) => {
  await connect();
  const id = req.params.id;
  const listById = await rooms.findOne({ _id: ObjectId(id) });
  if (!listById) {
    res.status(404).json({ error: "Room not found" });
    return;
  }
  dbclose();
  res.status(200).json(listById);
};

exports.createRoom = async (req, res) => {
  await connect();
  const newRoom = req.body;
  if (!newRoom) {
    //|| !newRoom.name  || !newRoom.category || !newRoom.price || !newRoom.vacancy || !newRoom.ammenities || !newRoom.adress || !newRoom.private){
    res.status(400).json({
      error: "All fields must be filled",
    });
    dbclose();
    return;
  } else {
    const createResult = await rooms.insertOne(newRoom);
    if (createResult.acknowledged == false) {
      res.status(500).json({ error: "Failure adding new room to database" });
    }
    res.status(201).json(`Room ${newRoom.name} sucessfully added`);
    dbclose();
  }
};

exports.editRoom = async (req, res) => {
  await connect();
  const id = req.params.id;
  const room = req.body;

  if (!room) {
    res.status(500).json({ error: "Invalid request" });
  }

  const quantRooms = await rooms.countDocuments({
    _id: ObjectId(id),
  });

  if (quantRooms !== 1) {
    res.status(404).json({ error: "Room not found" });
  }

  const editById = await rooms.updateOne(
    {
      _id: ObjectId(id),
    },
    {
      $set: room,
    }
  );

  if (editById.acknowledged == "undefined") {
    res.status(500).json({ error: "Update fail" });
  }

  res.json(await rooms.findOne({ _id: ObjectId(id) }));

  dbclose();
};

exports.searchRooms = async (req, res) => {
  var { name, category, private, vacancy, ammenities } = req.query;
  !name ? name = "" : name = name;
  !category ? category = "" : category=category;
  !private ? private = "": private=private;
  !vacancy ? vacancy = "" : vacancy=vacancy;
  !ammenities ? ammenities = "" : ammenities=ammenities;

  try {
    await connect();
    const roomSearch = rooms.find({
      name: { $regex: `${name}`, $options: "i" },
      category: { $regex: `${category}`, $options: "i" },
      private: { $regex: `${private}`, $options: "i" },
      vacancy: { $regex: `${vacancy}`, $options: "i" },
      ammenities: { $regex: `${ammenities}`, $options: "i" },
    });
    let roomArray = await roomSearch.toArray();
    dbclose();
    
    if (roomArray.length === 0) {
      return res.status(404).send({ erro: "Room not found" });
    }
    return res.status(200).json(roomArray);
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
};

exports.deleteRoom = async (req, res) => {
  await connect();
  const id = req.params.id;

  const quantRooms = await rooms.countDocuments({
    _id: ObjectId(id),
  });

  if (quantRooms !== 1) {
    res.status(404).send({ error: "Room not found" });
    return;
  }

  const result = await rooms.deleteOne({
    _id: ObjectId(id),
  });

  if (result.deletedCount !== 1) {
    res.status(500).send({ error: "Delete failed" });
    return;
  }

  res.status(200).json({ message: "Room deleted" });

  dbclose();
};
