import { Request, Response } from "express";
import { GetOnePlayerService } from "../../services/player";

class GetOnePlayerController {
    async handle(request: Request, response: Response) {

        const username = request.params.username;

        const service = new GetOnePlayerService();
        try {
            const player = await service.execute(username);
            response.json(player)

        } catch(err){
            return response.json(err.message);
        }

    }
}

export { GetOnePlayerController }