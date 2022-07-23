import { Request, Response } from "express";
import { GetAllPlayersService } from "../services/GetAllPlayersService";

class GetAllPlayersController {
    async handle(request: Request, response: Response) {

        response.setHeader('Access-Control-Allow-Origin', 'https://gobads.netlify.app');

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