import { Request, Response } from "express";
import { CreateAchievementService } from "../../services/achievements";

class CreateAchievementController {
  async handle(request: Request, response: Response) {
    
    const { icon, name, description  } = request.body;

    const service = new CreateAchievementService;
    try {
      const result = await service.execute(icon, name, description);
      return response.json(result);
    } catch(err){
      return response.json({error: err.message});
    }
  }
}

export { CreateAchievementController };