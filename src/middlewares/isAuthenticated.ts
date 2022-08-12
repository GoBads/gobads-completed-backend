import { Request, Response, NextFunction } from 'express';
import { validateToken } from '../utils';

interface ITokenPayload {
    player: {
        username: string,
        playerId: string
    }
}

export async function authorize(request: Request, response: Response, next: NextFunction) {
    const authToken = request.headers.authorization;

    if(!authToken) {
        return response.status(401).json({
            error: "Invalid Token",
        })
    }
    
    
    const [,token ] = authToken.split(" ");
    
    try{
        const decoded = await validateToken(token) as ITokenPayload;
        console.log(decoded)
        request.player_id = decoded.player.playerId;
        console.log(request.player_id)

        return next();

    } catch(err){
        return response.status(401).json({
            error: err.message
        })
    }
}