import jwt from 'jsonwebtoken';
import { JWT_SECRETE } from "../config/serverConfig.js";

export const generateToken = (payload) =>{
    return jwt.sign(payload, JWT_SECRETE,{expiresIn:'1d'});
}

export const verifyToken = (token) =>{
    return jwt.verify(token, JWT_SECRETE);
}