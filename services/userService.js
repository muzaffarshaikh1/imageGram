import { createUser } from "../repositories/userRepository.js"

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
