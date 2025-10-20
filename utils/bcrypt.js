import bcrypt from 'bcrypt'; 

export const comparePassword = (plainPassword,hash) =>{
    return bcrypt.compareSync(plainPassword,hash);
}

export const hashPassword = (plainPassword,salt) =>{
    return bcrypt.hashSync(plainPassword,salt)
}