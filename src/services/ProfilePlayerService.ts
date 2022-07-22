import prisma from "../prisma";

class profilePlayerService {
    async execute(playerId: string){
        const player = await prisma.player.findFirst({
            where: {
                id: playerId
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

        return player;
    }
}

export { profilePlayerService }