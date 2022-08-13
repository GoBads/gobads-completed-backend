import prisma from '../../prisma';

class EditAchievementService {
    async execute(achievement_id: string, newAchievement) {

        const updatedAchievement = await prisma.achiviement.update({
            where: {
              id: achievement_id,
            },
            data: {
                ...newAchievement
            },
            select: {
                id: true,
                icon: true,
                name: true,
                description: true,
            },
        });
      
        return updatedAchievement;

    }
}

export { EditAchievementService }
