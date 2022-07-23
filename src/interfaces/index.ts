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