import prisma from '../prisma';
import { LinkOrUnlinkToTournament } from '../utils/linkOrUnlinkToTournament';

class LinkToTournamentService {
    async execute(player_id: string, tournamentId: string, linkOrUnlink: boolean) {

        const tournamentLinked = await prisma.tournament.update({
            where: {
              id: tournamentId,
            },
            data: {
                players: {
                    ...LinkOrUnlinkToTournament(player_id, linkOrUnlink)
                }
            },
            include: {
                players: true,
            }
        });
      
        return tournamentLinked;

    }
}

export { LinkToTournamentService }