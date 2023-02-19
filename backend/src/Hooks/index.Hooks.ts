import { Application } from 'express'
import AuthRouter from '../Routers/Auth/Auth.routes'

export default (app: Application) => {
    app.use('/api', AuthRouter)
}