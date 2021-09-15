const router = require("express").Router();
const { listRooms, listRoomById } = require("../controllers/controllers");
const cors = require("cors");

router.use(cors());
router.options("*", cors());

router.get("/rooms", listRooms);
router.get("/rooms/:id",listRoomById);

module.exports=router;