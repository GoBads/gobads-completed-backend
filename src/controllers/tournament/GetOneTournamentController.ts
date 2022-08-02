import { Request, Response } from "express";
import { GetOneTournamentService } from "../../services/tournament";

class GetOneTournamentController {
    async handle(request: Request, response: Response) {

        const tournamentId = request.params.tournamentId;

        const service = new GetOneTournamentService();
        try {
            const tournament = await service.execute(tournamentId);
            response.json(tournament)

        } catch(err){
            return response.json(err.message);
        }

    }
}

export { GetOneTournamentController }