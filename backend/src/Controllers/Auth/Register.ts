import { Request, Response, NextFunction  } from 'express'
import { UserModel } from '../../Model/User/User.Model'
import { clientModel } from '../../Model/User/Client'
import { OrganizationModel } from '../../Model/User/Organization'
import { usernameOfUser } from '../../Functions/System/Auth/Username'
import { RegisterDTO } from './DTO/Register.dto'
import bcrypt from 'bcryptjs'

export const RegisterController = async (req: Request, res: Response, next: NextFunction) => {

    try {
        // Data
        const data: RegisterDTO = req.body

        // Check User Type
        if (data.type === 'client' || data.type === 'organization') {
            
            // username
            const username = usernameOfUser(data.fName, data.lName)
            data.username = username
            
            // Hash Password
            const salt = await bcrypt.genSalt(10)
            const hashPassword = await bcrypt.hash(req.body.password, salt)

            data.password = hashPassword

            // check email is already registered
            const emailCheck = await UserModel.findOne({ email: data.email })
            if (emailCheck) {
                res.status(402).json({ status: 402, message: 'email already registered' })
            }
            else {
                if (data.type === 'client') {
                    const addClient = await new clientModel(data)
                    const saveClient = await addClient.save()
                    // Save Data    
                    res.status(200).json({ status: 200, saveClient })
                }
                else if (data.type == 'organization') {
                    const addOrganization = await new OrganizationModel(data)
                    const saveOrganization = await addOrganization.save()
                    // Save Data    
                    res.status(200).json({ status: 200, saveOrganization })
                }
            }
        }
        else {
            res.status(401).json({ status: 401, message: 'please choice between client and organization' })
        }
        next()
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    catch (err: any) {
        res.status(500).json({ message: err.message })
    }
}