const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataUserRegistration = new Schema(
    {
        first_name: String,
        last_name: String,
        email: String,
        phone: String,
        city: String,
        password: String,
        photo: String,
        categories:Object
    }
);

module.exports = mongoose.model("DataUserRegistration", DataUserRegistration);
