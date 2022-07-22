import { Request, Response } from "express";
import { EditPlayerService } from "../services/EditPlayerService";

import { INewPlayer } from '../interfaces';

class EditPlayerController {
    async handle(request: Request, response: Response) {

        const playerId = request.params.playerId;
        const newPlayer: INewPlayer = request.body;

        const service = new EditPlayerService();
        try {
            const updatedPlayer = await service.execute(playerId, newPlayer);
            response.json(updatedPlayer)

        } catch(err){
            return response.json(err.message);
        }

    }
}

export { EditPlayerController }