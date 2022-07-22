import { verify } from 'jsonwebtoken';

interface ITokenPayload {
    player: {
        username: string
    }
}

export function validateToken(token: string): Promise<ITokenPayload> {
    const secretKey = process.env.JWT_SECRET;

    return new Promise((resolve, reject) => {
        verify(token, secretKey, (error, decoded: ITokenPayload) => {
            if (error) return reject(error);
      
            resolve(decoded);
          })
    })
}