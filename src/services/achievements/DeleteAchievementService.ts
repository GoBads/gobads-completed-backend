import prisma from '../../prisma';

class DeleteAchievementService {
  async execute(achievementId: string) {
    
    const deletedAchievement = await prisma.achiviement.delete({
      where: {
        id: achievementId
      }, 
      select: {
        id: true,
        icon: true,
        name: true,
        description: true
      }
    })

    return deletedAchievement;
  }
}

export { DeleteAchievementService }
