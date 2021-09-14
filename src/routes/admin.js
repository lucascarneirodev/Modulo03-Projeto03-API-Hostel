const router = require("express").Router();
const { listRooms, listRoomById, createRoom } = require("../controllers/controllers");
const cors = require("cors");

router.use(cors());
router.options("*", cors());

router.get("/rooms", listRooms);
router.get("/rooms/:id",listRoomById);
router.post("/new/room",createRoom);

module.exports=router;