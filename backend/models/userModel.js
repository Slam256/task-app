const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add a name"]
    },
    email: {
        type: String,
        required: [true, "Please add a valid email"],
        unique: true

    },
    password: {
        type: String,
        required: [true, "Please create a safe password"]
    },
}, {
    timestamps: true
}
)

module.exports = mongoose.model("User", userSchema)