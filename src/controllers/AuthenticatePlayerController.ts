import { Request, Response } from "express";
import { AuthenticatePlayerService } from "../services/AuthenticatePlayerService";

class AuthenticatePlayerController {
    async handle(request: Request, response: Response) {
        
        const { username, password } = request.body;

        const service = new AuthenticatePlayerService();
        try {
            const result = await service.execute(username, password);
            return response.json(result);

        } catch(err){
            return response.json({error: err.message});
        }

    }
}

export { AuthenticatePlayerController }