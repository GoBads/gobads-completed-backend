import prisma from '../prisma'
import { ICreateTournament } from '../interfaces';

export const createTournament = async (tournament: ICreateTournament) => {

  return await prisma.tournament.create({
    data: {
      title: tournament.title,
      description: tournament.description,
      dateOf: tournament.dateOf
    },
  })
}