import { Request, Response } from "express";
import { RegisterPlayerService } from "../services/RegisterPlayerService";

class RegisterPlayerController {
    async handle(request: Request, response: Response) {
        
        const { email, username, password } = request.body;

        const initials = username[0] + username[1];

        const avatar = `https://avatars.dicebear.com/api/initials/${initials}.svg`;

        const service = new RegisterPlayerService();
        try {
            const result = await service.execute(avatar, email, username, password);
            return response.json(result);

        } catch(err){
            return response.json({error: err.message});
        }

    }
}

export { RegisterPlayerController }