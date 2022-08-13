import { Router } from 'express';

import {
    CreateAchievementController
} from './controllers/achievements'

import { 
    AuthenticatePlayerController,
    GetAllPlayersController,
    RegisterPlayerController,
    GetOnePlayerController,
    ProfilePlayerController,
    EditPlayerController,
    RemovePlayerController,
    AddPhotoController,
} from './controllers/player';

import {
    CreateTournamentController,
    LinkToTournamentController,
    GetAllTournamentsController,
    GetOneTournamentController,
    DeleteTournamentController
} from './controllers/tournament'

import { authorize } from './middlewares/isAuthenticated';

const router = Router();

// Generic Routes

router.get("/players", new GetAllPlayersController().handle);

router.get("/player/:username", new GetOnePlayerController().handle);

// Player Routes
router.get("/profile", authorize, new ProfilePlayerController().handle);
router.post("/authenticate", new AuthenticatePlayerController().handle);
router.post("/register", new RegisterPlayerController().handle);
router.put("/profile/edit", authorize, new EditPlayerController().handle);
router.put("/profile/photo", authorize, new AddPhotoController().handle);
router.delete("/player/remove/:playerId", authorize, new RemovePlayerController().handle);

// Tournament Routes
router.get("/tournament/all", authorize, new GetAllTournamentsController().handle);
router.get("/tournament/:tournamentId", authorize, new GetOneTournamentController().handle);
router.post("/tournament/create", authorize, new CreateTournamentController().handle);
router.put("/tournament/link", authorize, new LinkToTournamentController().handle);
router.delete("/tournament/delete/:tournamentId", authorize, new DeleteTournamentController().handle);

// Achievements
router.post("/achievement/create", new CreateAchievementController().handle);


export { router }