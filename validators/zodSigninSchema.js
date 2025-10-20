import {z} from 'zod';
export const zodSigninSchema = z.object({
    email: z.string({ message: "email is required" }).email(),
    password: z.string({ message: "password is required" }).min(5),
})