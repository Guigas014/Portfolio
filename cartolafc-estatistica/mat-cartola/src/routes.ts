import { Router } from 'express'

import { InitDatabaseController } from './controllers/InitDatabaseController'


const router = Router();

router.get("/", new InitDatabaseController().handle)


export { router }

