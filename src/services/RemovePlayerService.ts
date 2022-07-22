import prisma from '../prisma';

class RemovePlayerService {
    async execute(playerId: string) {

        const deletedPlayer= await prisma.player.delete({
            where: {
              id: playerId,
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
      
        return deletedPlayer;

    }
}

export { RemovePlayerService }