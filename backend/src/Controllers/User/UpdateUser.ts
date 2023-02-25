import { Request, Response, NextFunction } from 'express'
import { UserModel } from '../../Model/User/User.Model'


// Update Data
export const UpdateUserController = async (req: Request | any, res: Response, next: NextFunction) => {
    try {
        const userId = req.user._id

        await UserModel.findByIdAndUpdate(userId, {
            $set: req.body,
        })

        res.status(200).json({ status: 200, message: 'Success Update Data' })
        next()
    }
    catch (err: any) {
        res.status(500).json({ message: err.message })
    }
}

// Change Password