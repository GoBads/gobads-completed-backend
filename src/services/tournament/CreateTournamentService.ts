import { response } from 'express';
import prisma from '../../prisma';
import { createTournament } from '../../utils/createTournament';

class CreateTournamentService {
    async execute(title: string, description: string, dateOf: Date) {

        const tournamentExists = await prisma.tournament.count({ 
            where: { 
                title: title 
            }
        });

        if (tournamentExists) {  
            response.json ({ error: `Tournament already exists with that title` })
        }

        const tournament = await createTournament({
            title,
            description,
            dateOf
        });

        if (!tournament) {   
            response.json({ error: 'Something went wrong trying to create a new Tournament.' })
        }

        return { tournament };
    }
}

export { CreateTournamentService }








