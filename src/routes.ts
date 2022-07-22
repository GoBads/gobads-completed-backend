import { Router } from 'express';
import { AuthenticatePlayerController } from './controllers/AuthenticatePlayerController';
import { GetAllPlayersController } from './controllers/GetAllPlayersController';
import { RegisterPlayerController } from './controllers/RegisterPlayerController';
import { GetOnePlayerController } from './controllers/GetOnePlayerController';
import { ProfilePlayerController } from './controllers/ProfilePlayerController';

import { authorize } from './middlewares/isAuthenticated';
import { EditPlayerController } from './controllers/EditPlayerController';
import { RemovePlayerController } from './controllers/RemovePlayerController';

const router = Router();

// Generic Routes

router.get("/players", new GetAllPlayersController().handle);

router.get("/player/:username", new GetOnePlayerController().handle);

// Player Routes

router.get("/profile/:profileId", authorize, new ProfilePlayerController().handle);

router.post("/authenticate", new AuthenticatePlayerController().handle);

router.post("/register", new RegisterPlayerController().handle);

router.put("/player/edit/:playerId", authorize, new EditPlayerController().handle);

router.delete("/player/remove/:playerId", authorize, new RemovePlayerController().handle);

// Admin Routes

export { router }