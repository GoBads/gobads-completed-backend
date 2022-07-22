import { response } from 'express';
import prisma from '../prisma';
import { createPlayer } from '../utils';

class RegisterPlayerService {
    async execute(email: string, username: string, password: string) {

        const playerExists = await prisma.player.count({ 
            where: 
                { 
                    email: email 
                }
            });

        if (playerExists) {  response.json ({ error: `Player already exists with that email` })}

        const player = await createPlayer({
            email,
            username,
            password,
        });

        if (!player) {   
            response.json({ error: 'Something went wrong trying to create a new player.' })
        }

        return { player };
    }
}

export { RegisterPlayerService }








