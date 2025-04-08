import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {type: String},
    password: {type: String, required: true}
})

const user = mongoose.models.user || mongoose.model("user", userSchema)
export default user