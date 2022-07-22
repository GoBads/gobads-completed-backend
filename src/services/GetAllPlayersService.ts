import prisma from '../prisma';
import { response } from 'express';

class GetAllPlayersService {
    async execute() {

        const players = await prisma.player.findMany();
        if (!players) { response.json('erro') }
        return players

    }
}

export { GetAllPlayersService }