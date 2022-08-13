import prisma from '../../prisma';
import { response } from 'express';

class GetOneAchievementService {
  async execute(achievementId: string) {
    const achievement = await prisma.achiviement.findFirst({
      where: {
        id: achievementId
      },
      select: {
        id: true,
        icon: true,
        name: true,
        description: true,
      }
    });

    if(!achievement) { response.json('erroe') }
    return achievement

  }
}

export { GetOneAchievementService }
