const router = require("express").Router();
const { listRooms, listRoomById, createRoom editRoom} = require("../controllers/controllers");
const cors = require("cors");

router.use(cors());
router.options("*", cors());

router.post("/new/room",createRoom);
router.put("/edit/room",editRoom)

module.exports=router;