export interface IPlayer {
    id: string,
    type: string,
    avatar: string,
    email: string,
    username: string,
    password: string
}

export interface INewPlayer {
    id?: string,
    type?: string,
    avatar?: string,
    email?: string,
    username?: string,
    password?: string
}

export type ICreatePlayer = {
    avatar: string,
    email: string,
    username: string,
    password: string
}

export type ICreateTournament = {
    title: string,
    description: string,
    dateOf: Date,
}

export type ICreateAchievement = {
    icon: string,
    name: string,
    description: string,
}

export type INewAchievement = {
    icon?: string,
    name?: string,
    description?: string,
}