import { Request, Response, Router } from 'express'
import { rolesRouter } from '@roles/http/routes/roles.routes'

const routes = Router()

routes.get('/', (request: Request, response: Response) => {
  return response.json({ message: 'Olá dev' })
})

routes.use('/roles', rolesRouter)

export { routes }
