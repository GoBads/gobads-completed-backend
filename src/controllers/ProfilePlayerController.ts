import { Request, Response } from 'express';
import { profilePlayerService } from '../services/ProfilePlayerService';


class ProfilePlayerController {
    async handle(request: Request, response: Response){
        const { profileId } = request.params;

        const service = new profilePlayerService();

        const result = await service.execute(profileId);
        
        return response.json(result);
    
    }
}

export { ProfilePlayerController }