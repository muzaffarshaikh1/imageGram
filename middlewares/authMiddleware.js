import { checkIfUserExists } from "../services/userService.js";
import { verifyToken } from "../utils/jwt.js";

export const isAuthenticated = async(req,res,next) =>{
    // fetch the token
    const token = req.headers['x-access-token'];

    if(!token){
        return res.status(404).json({
            success:false,
            message:"token is required!",
        })
    }

    // verify the token
    try {
        const response = verifyToken(token);

        const doesUserExists = await checkIfUserExists(response.email); 

        if(!doesUserExists){
            return res.status(404).json({
                success:false,
                message:"user not found!",
            })
        }

        req.user = response;

        next();

    } catch (error) {
        console.log("error in isAuthenticated middlware:",error)
    }
}

export const isAdmin = (req,res,next) =>{
    console.log(req.user)
    if(req.user.role != "admin"){
        return res.status(403).json({
            success:false,
            message:"you're not admin",
        });
    }
    next();
}