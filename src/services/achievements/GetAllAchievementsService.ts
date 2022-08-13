import prisma from '../../prisma';
import { response } from 'express';

class GetAllAchievementsService {
    async execute() {

        const achievements = await prisma.achiviement.findMany({
            select: {
                id: true,
                icon: true,
                name: true,
                description: true,
            },
        });
        if (!achievements) { response.json('error') }
        return achievements

    }
}

export { GetAllAchievementsService }
