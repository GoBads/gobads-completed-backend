import axios from 'axios';
import prisma from '../prisma';

class RegisterPlayerService {
    async execute(email: string, username: string, password: string) {

        const player = await prisma.player.create({
            data: {
                email: email,
                username: username,
                password: password
            }
        });

        return { player };
    }
}

export { RegisterPlayerService }