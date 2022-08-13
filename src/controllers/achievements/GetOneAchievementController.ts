import { Request, Response } from 'express';
import { GetOneAchievementService } from "../../services/achievements";

class GetOneAchievementController {
  async handle(request: Request, response: Response) {
    const achievementId = request.params.achievementId

    const service = new GetOneAchievementService();
    
    try {
      const achievement = await service.execute(achievementId)
      return response.json(achievement)
    } catch(err) {
      return response.json({ error: err.message })
    }
  }
}

export { GetOneAchievementController }
