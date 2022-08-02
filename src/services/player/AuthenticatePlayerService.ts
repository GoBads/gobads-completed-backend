import prisma from '../../prisma';
import { sign } from 'jsonwebtoken';
import { response } from 'express';
import bcrypt from 'bcryptjs';

class AuthenticatePlayerService {
    async execute(username: string, password: string) {

        const player = await prisma.player.findFirst({
            where: { username },
          })

        if(!player) {
            response.json("Player not found")
        }

        if (!player || !(await bcrypt.compare(password, player.password)))
            response.json({ error: `Incorrect login` })

        const token = sign(
            {
                player: {
                    playerId: player.id,
                    username: player.username,
                }
            },
            process.env.JWT_SECRET,
            {
                subject: player.id,
                expiresIn: '1d'
            }
            )

        return { token, player, error: false };

    }
}

export { AuthenticatePlayerService }