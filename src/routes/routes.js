const router = require("express").Router();
const { listRooms, listRoomById, createRoom, editRoom, deleteRoom,searchRooms} = require("../controllers/controllers");
const cors = require("cors");

router.use(cors());
router.options("*", cors());

//Public routes
router.get("/rooms", listRooms);//list all rooms
router.get("/rooms/:id",listRoomById);//list room by id
router.get("/search/rooms/",searchRooms);//filter by query params

//Adm Routes
router.get("/adm/rooms", listRooms);//list all rooms
router.get("/adm/rooms/:id",listRoomById);//list room by id
router.post("/adm/rooms/new",createRoom);//create new room
router.put("/adm/rooms/edit/:id",editRoom);//edit existing room by id
router.delete("/adm/rooms/delete/:id",deleteRoom);//delete room by id
router.get("/adm/search/rooms",searchRooms);// search by query params



module.exports=router;