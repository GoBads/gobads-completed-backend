import { Request, Response } from 'express';
import { profilePlayerService } from '../services/ProfilePlayerService';

interface RequestWithPlayerRole extends Request {
    player_id: string,
}


class ProfilePlayerController {
    async handle(request: RequestWithPlayerRole, response: Response){
        //const { playerId } = request.params;
        const { player_id } = request;

        const service = new profilePlayerService();

        const result = await service.execute(player_id);
        
        return response.json(result);
    
    }
}

export { ProfilePlayerController }