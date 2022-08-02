import { Request, Response } from "express";
import { DeleteTournamentService } from "../../services/tournament";

class DeleteTournamentController {
    async handle(request: Request, response: Response) {

        const { tournamentId } = request.params;

        const service = new DeleteTournamentService();
        try {

            const deletedTournament = await service.execute(tournamentId);
            response.json({success: 'Tournament Deleted With Success', deletedTournament})

        } catch(err){
            return response.json(err.message);
        }
    }
}

export { DeleteTournamentController }