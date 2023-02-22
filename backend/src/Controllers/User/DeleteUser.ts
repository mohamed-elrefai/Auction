import { Request, Response, NextFunction } from 'express'
import { UserModel } from '../../Model/User/User.Model'


// Delete Data
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const DeleteUserController = async (req: Request | any, res: Response, next: NextFunction) => {
    try {
        const userId = req.user._id

        await UserModel.findByIdAndDelete(userId)

        res.status(200).json({ status: 200, message: 'Success Delete Account' })
        next()
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    catch (err: any) {
        res.status(500).json({ message: err.message })
    }
}
