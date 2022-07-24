import { Request, Response } from "express";
import { CreateTournamentService } from "../services/CreateTournamentService";

class CreateTournamentController {
    async handle(request: Request, response: Response) {
        
        const { title, description, dateOf } = request.body;

        const service = new CreateTournamentService();

        try {
            const result = await service.execute(title, description, new Date(dateOf));
            return response.json(result);

        } catch(err){
            return response.json({error: err.message});
        }

    }
}

export { CreateTournamentController }