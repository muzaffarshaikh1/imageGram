import User from '../schema/user.js';

export const findUserByEmail = async (email) =>{
    try{
        const user = await User.findOne({email});
        return user;
    }catch(error){
        console.log(error);
    }
}

export const findAllUsers = async () =>{
    try {
        const users = await User.find();
        return users;
    } catch (error) {
        console.log(error)
    }
}

export const createUser = async (createObject) =>{
    try {
        const user = await User.create(createObject);
        return user;
    } catch (error) {
        // console.log("error in createUser Repository:",error)
        throw error;
    }
}