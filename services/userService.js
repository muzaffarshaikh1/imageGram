import { createUser,findUserByEmail } from "../repositories/userRepository.js";
import { comparePassword } from "../utils/bcrypt.js";
import { generateToken } from "../utils/jwt.js";

export const signupUserService = async(createObject) =>{
    try {
        const response = await createUser(createObject);
        return response;
    } catch (error) {
        if(error.name == 'MongoServerError' && error.code ==11000){
            throw{
                status:400,
                message:"User with same email and username is already exists!"
            }
        }
        throw error;
    }
}

export const signinUserService = async(userObject) =>{
    const user = await findUserByEmail(userObject.email);
    
    if(!user){
        throw{
            status:404,
            message:"User not found!"
        }
    }

    const isValidPassword = comparePassword(userObject.password,user.password);

    if(!isValidPassword){
        throw{
            status:401,
            message:"invalid password",
        }
    }

    const token = generateToken({ email: user.email, _id:user.id, username:user.username,role:user.role || "user"});

    return token;
}

export const checkIfUserExists = async(email) =>{
    try {
        const user = await findUserByEmail(email);
        return user;
    } catch (error) {
        console.log("error in checkIfUserExists:",error);
        throw error;
    } 
}

