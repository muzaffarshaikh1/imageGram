import {z} from 'zod';
export const zodSignupSchema = z.object({
    username: z.string({ message: "username is required" }).min(5),
    email: z.string({ message: "email is required" }).email(),
    password: z.string({ message: "password is required" }).min(5),
})