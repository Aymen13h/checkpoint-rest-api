const mongoose = require("mongoose")
const config=require("config")
const db=config.get("db")

mongoose.set('strictQuery', true);

const connect = async () => {
    try {
        await mongoose.connect(db)
        console.log("data base is successfuly conected")
    } catch (error) {
        console.log(error.message)
    }
}


module.exports = connect;