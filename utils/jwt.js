import jwt from 'jsonwebtoken';
import { JWT_SECRETE } from "../config/serverConfig.js";

export const generateToken = (payload) =>{
    return jwt.sign(payload, JWT_SECRETE,{expiresIn:'1d'});
}