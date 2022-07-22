import { Router } from 'express';
import { AuthenticatePlayerController } from './controllers/AuthenticatePlayerController';
import { RegisterPlayerController } from './controllers/RegisterPlayerController';

const router = Router();

router.post("/authenticate", new AuthenticatePlayerController().handle);

router.post("/register", new RegisterPlayerController().handle);
//
//router.get("/profile", ensureAuthenticated, new ProfileUserController().handle);

export { router }