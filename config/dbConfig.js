import mongoose from "mongoose";
import { DB_URL } from "./serverConfig.js";
async function connectDb(){
    try {
        mongoose.connect(DB_URL).then(()=>{
            console.log("Database connected succesfully")
        })
    } catch (error) {
        console.log("error while connecting database:",error);
    }
}

export default connectDb;