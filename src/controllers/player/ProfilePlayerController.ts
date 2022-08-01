import { Request, Response } from 'express';
import { ProfilePlayerService } from '../../services/player';

interface RequestWithPlayerRole extends Request {
    player_id: string,
}


class ProfilePlayerController {
    async handle(request: RequestWithPlayerRole, response: Response){
        //const { playerId } = request.params;
        const { player_id } = request;

        const service = new ProfilePlayerService();

        const result = await service.execute(player_id);
        
        return response.json(result);
    
    }
}

export { ProfilePlayerController }