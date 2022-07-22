import { Request, Response, NextFunction } from 'express';
import { validateToken } from '../utils';

export async function authorize(request: Request, response: Response, next: NextFunction) {
    const authToken = request.headers.authorization;

    if(!authToken) {
        return response.status(401).json({
            error: "Invalid Token",
        })
    }


    const [,token ] = authToken.split(" ");
    
    try{
        await validateToken(token);
        //request.username = player.username;

        return next();

    } catch(err){
        return response.status(401).json({
            error: err.message
        })
    }
}