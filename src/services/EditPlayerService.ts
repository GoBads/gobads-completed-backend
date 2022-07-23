import prisma from '../prisma';

class EditPlayerService {
    async execute(player_id: string, newPlayer) {

        const updatedPlayer = await prisma.player.update({
            where: {
              id: player_id,
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
                wins: true,
                loses: true,
                password: false
            },
        });
      
        return updatedPlayer;

    }
}

export { EditPlayerService }