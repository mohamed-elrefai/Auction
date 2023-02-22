import { Application } from 'express'
import AuthRouter from '../Routers/Auth/Auth.routes'
import UserRouter from '../Routers/User/User.routes'

export default (app: Application) => {
    app.use('/api', AuthRouter)
    app.use('/api', UserRouter)
}