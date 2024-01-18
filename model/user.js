const mongoose = require("mongoose");
const user_schema = new mongoose.Schema({
    userEmail: {
    type: String,
    required: true,
    trim: true
    },
    userEmail: {
        type: String,
        required: true,
        trim: true
        },
        userNAME: {
        type: String,
        required: true,
        trim: true
        },
        userPASSWORD: {
        type: String,
        required: true,
        trim: true
        },
        userDOB: {
        type: String,
        required: true,
        trim: true
        },
        userPHONENUMBER: {
        type: Number,
        required: true,
        trim: true
        },
        userOCCUPATION: {
        type: String,
        required: true,
        trim: true
        }
}
)

module.exports = mongoose.model("USER-INFO" , user_schema );