import prisma from '../../prisma';

class DeleteTournamentService {
    async execute(tournamentId: string) {

        const deletedTournament= await prisma.tournament.delete({
            where: {
              id: tournamentId,
            },
            select: {
                id: true,
                title: true,
                description: true,
                dateOf: true,
                createdAt: false,
                players: false,
                updatedAt: false
            },
        });
      
        return deletedTournament;

    }
}

export { DeleteTournamentService }