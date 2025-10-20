import { signupUserService,signinUserService } from "../services/userService.js"
export async function getUserProfile(req,res){
    return res.status(200).json({
        success:true,
        message:"Route is in progress",
    })
}

export async function signUp(req,res){

   try {
    const response = await signupUserService(req.body);

    return res.status(200).json({
        success:true,
        message:"User Created Successfully!",
        data:response
    })
   } catch (error) {
        console.log("error in signup:",error);

        if(error.status){
            return res.status(error.status).json({
                success:true,
                message:error.message,
            })
        }

        return res.status(500).json({
            success:false,
            message:"internal server error!",
        });
   }
}

export async function signin(req,res){
    try {
        const response = await signinUserService(req.body);
        
        return res.status(200).json({
            success:true,
            message:"user logged in successfully!",
            data:response
        });

    } catch (error) {
        console.log("error in signin:",error);
        
        if(error.status){
            return res.status(error.status).json({
                success:true,
                message:error.message,
            })
        }
        
        return res.status(500).json({
            success:false,
            message:"internal server error!",
        })
    }
}