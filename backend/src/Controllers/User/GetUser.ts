import { Request, Response, NextFunction } from 'express'
import { UserModel } from '../../Model/User/User.Model'

export const GetUserController = async (req: Request | any, res: Response, next: NextFunction) => {
    try {
        const userId = req.user._id
        const user = await UserModel.findById(userId)

        res.status(200).json({ status: 200, user })
        next()
    }
    catch (err: any) {
        res.status(500).json({ message: err.message })
    }
}