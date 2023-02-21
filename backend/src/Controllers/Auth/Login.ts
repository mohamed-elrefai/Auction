import bcrypt from 'bcryptjs'
import { Request, Response, NextFunction } from 'express'
import { UserModel } from '../../Model/User/User.Model'
import { createToken } from '../../Functions/System/Auth/JWT/jwt'
import { LoginDTO } from './DTO/Login.dto'
//import { Types } from 'mongoose'

export const LoginController = async (req: Request, res: Response, next: NextFunction) => {

    try {
        // Data
        const data: LoginDTO = req.body

        // Check Email
        const checkEmail = await UserModel.findOne({ email: data.email })
        if (!checkEmail) {
            res.status(403).json({ status: 403, message: 'Email not found' })
        }

        // Check Password
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const checkPassword = await bcrypt.compare(data.password, checkEmail!.password)
        if (!checkPassword) {
            res.status(403).json({ status: 403, message: 'Password is Wrong' })
        }        

        if (checkEmail && checkPassword) {
            // Create Token Headers
            const id = checkEmail?._id
            const token = createToken(id)
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            checkEmail!.token = token
            res.status(200).json({ status: 200, checkEmail })
            next()

        }
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    catch (err: any) {
        res.status(500).json({ message: err.message })
    }
}