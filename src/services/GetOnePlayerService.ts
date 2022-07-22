import prisma from '../prisma';
import { response } from 'express';

class GetOnePlayerService {
    async execute(username: string) {

        const player = await prisma.player.findFirst({
            where: {
                username: username
            }
        });
        if (!player) { response.json('error') }
        return player

    }
}

export { GetOnePlayerService }