import { Request, Response } from "express";
import { GetAllPlayersService } from "../services/GetAllPlayersService";

class GetAllPlayersController {
    async handle(request: Request, response: Response) {
        request.headers["access-control-allow-origin"] = "https://gobads.netlify.app/"

        const service = new GetAllPlayersService();
        try {
            const players = await service.execute();
            response.json(players)

        } catch(err){
            return response.json(err.message);
        }

    }
}

export { GetAllPlayersController }