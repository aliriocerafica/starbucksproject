import mongoose from "mongoose";

const connectToDatabase = async () => {
    try{
        await mongoose.connect(process.env.MongoURL)
        console.log("Connected to db")
    }catch(err) {
        console.log(err)
    }
    
}

export default connectToDatabase