import prisma from '../../prisma';
import { response } from 'express';

class GetAllPlayersService {
    async execute() {

        const players = await prisma.player.findMany({
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
        if (!players) { response.json('error') }
        return players

    }
}

export { GetAllPlayersService }