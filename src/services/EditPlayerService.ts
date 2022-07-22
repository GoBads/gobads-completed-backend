import prisma from '../prisma';

class EditPlayerService {
    async execute(playerId: string, newPlayer) {

        const updatedPlayer = await prisma.player.update({
            where: {
              id: playerId,
            },
            data: {
                ...newPlayer
            },
            select: {
                id: true,
                email: true,
                avatar: true,
                username: true,
                created_at: true,
                type: true,
                password: false
            },
        });
      
        return updatedPlayer;

    }
}

export { EditPlayerService }