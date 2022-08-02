import { Request, Response } from "express";
import { GetAllTournamentsService } from "../../services/tournament";

class GetAllTournamentsController {
    async handle(request: Request, response: Response) {
        const service = new GetAllTournamentsService();
        try {
            const tournaments = await service.execute();
            response.json(tournaments)

        } catch(err){
            return response.json(err.message);
        }

    }
}

export { GetAllTournamentsController }