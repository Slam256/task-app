const express = require("express")
const router = express.Router()
const {
    registerUser,
    loginUser, 
    getMe 
} = require("../controllers/userController")
const { protect } = require("../middleware/authMiddleware")

//add a user / register
router.post("/", registerUser)
//login user
router.post("/login", loginUser)
//get user data
router.get("/me", protect, getMe)

module.exports = router