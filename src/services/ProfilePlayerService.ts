import prisma from "../prisma";

class profilePlayerService {
    async execute(player_id: string){
        const player = await prisma.player.findFirst({
            where: {
                id: player_id
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

        return player;
    }
}

export { profilePlayerService }