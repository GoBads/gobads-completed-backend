import { Request, Response } from "express";
import { RemovePlayerService } from "../services/RemovePlayerService";

class RemovePlayerController {
    async handle(request: Request, response: Response) {

        const { playerId } = request.params;

        const service = new RemovePlayerService();
        try {
            const deletedPlayer = await service.execute(playerId);
            response.json({success: 'Player Deleted With Success', deletedPlayer})

        } catch(err){
            return response.json(err.message);
        }

    }
}

export { RemovePlayerController }