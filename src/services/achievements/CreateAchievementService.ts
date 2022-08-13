import { response } from 'express';
import prisma from '../../prisma';
import { createAchievement } from '../../utils';

class CreateAchievementService {
  async execute(icon: string, name: string, description: string) {
    const achievement = createAchievement({
      icon,
      name,
      description
    })

    if(!achievement) {
      response.json({ error: 'Something went wrong trying to create a new player.' })
    }

    return achievement
  }
}

export { CreateAchievementService }