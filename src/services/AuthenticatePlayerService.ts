import axios from 'axios';
import prisma from '../prisma';
import { sign } from 'jsonwebtoken';
import { response } from 'express';

class AuthenticatePlayerService {
    async execute(username: string, password: string) {

        let player = await prisma.player.findFirst({
            where: {
                username: username,
                password: password
            }
        })

        if(!player) {
            response.json("Player not found")
        }

        const token = sign(
            {
                player: {
                    username: player.username,
                }
            },
            process.env.JWT_SECRET,
            {
                subject: player.id,
                expiresIn: '1d'
            }
            )

        return { token, player };

    }
}

export { AuthenticatePlayerService }