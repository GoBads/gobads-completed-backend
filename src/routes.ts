import { Router } from 'express';
import { AuthenticatePlayerController } from './controllers/AuthenticatePlayerController';
import { GetAllPlayersController } from './controllers/GetAllPlayersController';
import { RegisterPlayerController } from './controllers/RegisterPlayerController';
import { GetOnePlayerController } from './controllers/GetOnePlayerController';
import { ProfilePlayerController } from './controllers/ProfilePlayerController';

import { authorize } from './middlewares/isAuthenticated';
import { EditPlayerController } from './controllers/EditPlayerController';
import { RemovePlayerController } from './controllers/RemovePlayerController';
import { CreateTournamentController } from './controllers/CreateTournamentController';
import { LinkToTournamentController } from './controllers/LinkToTournamentController';
import { GetAllTournamentsController } from './controllers/GetAllTournamentsController';
import { GetOneTournamentController } from './controllers/GetOneTournamentController';
import { DeleteTournamentController } from './controllers/DeleteTournamentController';

const router = Router();

// Generic Routes

router.get("/players", new GetAllPlayersController().handle);

router.get("/player/:username", new GetOnePlayerController().handle);

// Player Routes
router.get("/profile", authorize, new ProfilePlayerController().handle);
router.post("/authenticate", new AuthenticatePlayerController().handle);
router.post("/register", new RegisterPlayerController().handle);
router.put("/profile/edit", authorize, new EditPlayerController().handle);
router.delete("/player/remove/:playerId", authorize, new RemovePlayerController().handle);

// Tournament Routes
router.get("/tournament/all", authorize, new GetAllTournamentsController().handle);
router.get("/tournament/:tournamentId", authorize, new GetOneTournamentController().handle);
router.post("/tournament/create", authorize, new CreateTournamentController().handle);
router.put("/tournament/link", authorize, new LinkToTournamentController().handle);
router.delete("/tournament/delete/:tournamentId", authorize, new DeleteTournamentController().handle);

export { router }