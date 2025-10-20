import mongoose  from "mongoose";
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        minLenth:5
    },
    email:{
        type:String,
        required:true,
        unique:true,
        minLenth:5,
        validate:{
            validator:function (emailValue){
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue);
            },
            message:"invalid email format"
        }
    },
    password:{
        type:String,
        required:true,
        minLenth:5
    }
},{timestamps:true});

userSchema.pre('save',function hashPassword(next){
    const user = this;

    // setting up salt rounds
    const SALT = bcrypt.genSaltSync(9);

    // hashing password
    const hashPassword = bcrypt.hashSync(user.password,SALT);

    // storing hashPassword in user document
    user.password = hashPassword;

    next();
})


const user = mongoose.model('User', userSchema);

export default user;