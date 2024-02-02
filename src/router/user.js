import express from "express";
import {add, get, update, updateOne, deletes, getOne} from "../controller/user.js"

const router = express.Router();


// router to add a user
router.post("/users", add )

// router to get a user
router.get("/users/:userid",getOne)

// router to get all users
router.get("/users", get)

//router to update user's fields
router.patch("/users/:userid", updateOne)

//router to update user's all fields
router.put("/users/:userid", update)



//router to delete a user
router.delete("/users/:userid", deletes)



export default router;





