import { Request, Response, Router } from 'express';

const mainRouter: Router = Router()

mainRouter.get('/', (_request: Request, response: Response) => {
  const data: any = { name: 'John Doe' }
  response.render('main', data)
})

export default mainRouter
