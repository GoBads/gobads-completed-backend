import bcrypt from 'bcryptjs'
import prisma from '../prisma'
import { ICreatePlayer } from '../interfaces';

export const createPlayer = async (player: ICreatePlayer) => {

  const passwordHash = await bcrypt.hash(player.password, 10);

  const newPlayer = await prisma.player.create({
    data: {
      avatar: player.avatar,
      email: player.email,
      password: passwordHash,
      username: player.username
    },
  })

  return { id: newPlayer.id, email: player.email, avatar: player.avatar }
}