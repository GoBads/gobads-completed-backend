import prisma from '../prisma'
import { ICreateAchievement } from '../interfaces';

export const createAchievement = async (achievement: ICreateAchievement) => {
  const newAchievement = await prisma.achiviement.create({
    data: {
      icon: achievement.icon,
      name: achievement.name,
      description: achievement.description,
    }
  })

  return { 
    id: newAchievement.id,
    icon: newAchievement.icon, 
    name: newAchievement.name, 
    description: newAchievement.description
  }
}
