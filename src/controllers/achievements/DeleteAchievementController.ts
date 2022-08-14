import { Request, Response } from 'express';
import { DeleteAchievementService } from '../../services/achievements'

class DeleteAchievementController {
  async handle(request: Request, response: Response) {
    const achievementId = request.params.achievementId;

    const service = new DeleteAchievementService();

    try {
      const deletedAchievement = await service.execute(achievementId);
      return response.json(deletedAchievement)
    } catch(err) {
      return response.json(err.message);
    }
  }
}

export { DeleteAchievementController }
