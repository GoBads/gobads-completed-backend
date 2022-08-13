import { Request, Response } from 'express';
import { EditAchievementService } from '../../services/achievements';

import { INewAchievement } from '../../interfaces';

class EditAchievementController {
  async handle(request: Request, response: Response) {

    const { achievementId } = request.params;
    const newAchievement: INewAchievement = request.body;

    const service = new EditAchievementService();

    try {
      const updatedAchievement = await service.execute(achievementId, newAchievement);
      response.json(updatedAchievement)
    } catch(err) {
      return response.json(err.message);
    }
  }
}

export { EditAchievementController }
