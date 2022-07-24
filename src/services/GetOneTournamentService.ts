import prisma from '../prisma';
import { response } from 'express';

class GetOneTournamentService {
    async execute(tournamentId: string) {

        const tournament = await prisma.tournament.findFirst({
            where: {
                id: tournamentId
            },
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
                        loses: true,
                        username: true,
                        wins: true,
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
        if (!tournament) { response.json('error') }
        return tournament

    }
}

export { GetOneTournamentService }