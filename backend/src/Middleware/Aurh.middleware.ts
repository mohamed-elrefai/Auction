import jwt from 'jsonwebtoken'
import { RequestUser } from '../@Types/RequestUser'
import { StoreData } from '../@Types/StoreData'
import { Response, NextFunction } from 'express'
import { UserModel } from '../Model/User/User.Model'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const verifyToken = async (req: RequestUser | any, res: Response, next: NextFunction) => {
    const token = req.params.token || req.body.token || req.query.token || req.headers['token']

    if (token) {
        try {
            const TokenSecret = process.env.TokenSecret as string
            const userID = await jwt.verify(token, TokenSecret)  as StoreData
            const id = userID._id

            const user = await UserModel.findById(id)
            if (user) {
                req.user = user
                next()
            }
            else {
                res.status(403).json({ status: 403, message: 'there was an error creating' })
            }
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        catch (err: any) {
            res.status(500).json({ status: 500, messageError: err.message })
        }
    }
    else {
        res.status(401).json({ status: 401, message: 'Authentication failed' })
    }
}