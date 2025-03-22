import {JWT_PASSWORD} from "./config" 
import jwt from "jsonwebtoken"
//@ts-ignore
export const userMiddleware = (req:Request , res:Response , next:NextFunction)=>{
    //@ts-ignore
    const header = req.headers["authorization"] as string|undefined ;
    const decoded = jwt.verify(header as string, JWT_PASSWORD);
    if(decoded){
        //@ts-ignore
        req.userId = decoded.id
        next()
    }


}