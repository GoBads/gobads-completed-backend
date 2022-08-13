import { Request, Response } from "express";
import { GetAllAchievementsService } from "../../services/achievements";

class GetAllAchievementsController {
    async handle(request: Request, response: Response) {
        const service = new GetAllAchievementsService();
        try {
            const achievements = await service.execute();
            response.json(achievements)

        } catch(err){
            return response.json(err.message);
        }

    }
}

export { GetAllAchievementsController }