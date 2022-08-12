import { Request, Response } from "express";
import { EditPlayerService } from "../../services/player";

import multer from 'multer';
import multerConfig from '../../config/multer';

import { INewPlayer } from '../../interfaces';

const upload = multer(multerConfig).single('photo');

interface MulterRequest extends Request {
    file: any;
}

class AddPhotoController {
    async handle(request: Request, response: Response) {
        return upload(request, response, async (error) => {
            if (error) {
              return response.status(400).json({
                errors: [error.message],
              });
            }

            const { originalname, filename } = (request as MulterRequest).file;
            
            const { player_id } = request;
            const newPlayer: INewPlayer = request.body;

            const photo = `http://localhost:4000/images/${filename}`;
            newPlayer.avatar = photo

            const service = new EditPlayerService();
            try {
                const updatedPlayer = await service.execute(player_id, newPlayer);
                response.json(updatedPlayer)

            } catch(err){
                return response.json(err.message);
            }
        })
    }
}

export { AddPhotoController }