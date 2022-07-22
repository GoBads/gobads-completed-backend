import { Request, Response } from "express";
import { RegisterPlayerService } from "../services/RegisterPlayerService";

class RegisterPlayerController {
    async handle(request: Request, response: Response) {
        
        const { email, username, password } = request.body;

        const service = new RegisterPlayerService();
        try {
            const result = await service.execute(email, username, password);
            return response.json(result);

        } catch(err){
            return response.json({error: err.message});
        }

    }
}

export { RegisterPlayerController }