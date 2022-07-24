import { Request, Response } from "express";
import { CreateTournamentService } from "../services/CreateTournamentService";
import { LinkToTournamentService } from "../services/LinkToTournamentService";

class LinkToTournamentController {
    async handle(request: Request, response: Response) {
        
        const { tournamentId, linkOrUnlink } = request.body;
        const { player_id } = request;

        const service = new LinkToTournamentService();
        try {
            const result = await service.execute(player_id, tournamentId, linkOrUnlink);
            return response.json(result);

        } catch(err){
            return response.json({error: err.message});
        }

    }
}

export { LinkToTournamentController }