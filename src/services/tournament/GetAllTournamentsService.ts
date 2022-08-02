import prisma from '../../prisma';
import { response } from 'express';

class GetAllTournamentsService {
    async execute() {

        const tournaments = await prisma.tournament.findMany({
            select: {
                id: true,
                title: true,
                description: true,
                dateOf: true,
                createdAt: true,
                updatedAt: false,
                players: {
                    select: {
                        avatar: true,
                        username: true,
                        wins: true,
                        loses: true,
                        created_at: false,
                        email: false,
                        id: false,
                        password: false,
                        tournamentId: false,
                        tournaments: false,
                        type: false
                    }
                }
            },
        });
        if (!tournaments) { response.json('error') }
        return tournaments

    }
}

export { GetAllTournamentsService }