import * as MongoDB from 'mongoose'
import { Application } from 'express'

export default (app: Application) => {
    const port = process.env.PORT || 1999 as number
    const mongoLink = process.env.MONGO_PATH as string

    MongoDB.set('strictQuery', false)
    MongoDB.connect(mongoLink, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
    } as MongoDB.ConnectOptions).then(() => {
        app.listen(port, () => {
            console.log('server is running on link ' + process.env.Server_URL)
        })
    }).catch(err => console.log(err))

}