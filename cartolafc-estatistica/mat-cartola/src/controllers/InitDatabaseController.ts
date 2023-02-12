import { Request, Response } from 'express'

import { InitDatabaseService } from '../services/InitDatabaseService'


export class InitDatabaseController {
  async handle(req: Request, res: Response) {
  
    const service = new InitDatabaseService()

    const result = await service.execute()

    return res.json(result)
  }
}

