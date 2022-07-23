import prisma from '../prisma';
import { response } from 'express';

class GetOnePlayerService {
    async execute(username: string) {

        const player = await prisma.player.findFirst({
            where: {
                username: username
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
        if (!player) { response.json('error') }
        return player

    }
}

export { GetOnePlayerService }