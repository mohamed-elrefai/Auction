import { UserModel } from './../../Model/User/User.Model'
import { Request, Response, NextFunction } from 'express'
import { RoomsModel } from '../../Model/Rooms/Rooms.model'
import { ProductModel } from '../../Model/Products/Products'
import { PrivetArea } from '../../Functions/System/Area/Systems'

export const AddUserAuctionsController = async (req: Request | any, res: Response, next: NextFunction) => {
    try {
        const userId = req.user._id

        // Check if user already in the list
        const userList = await RoomsModel.findById(req.params.id)
        const joinUser = await UserModel.findById(req.body.id)
        const id = joinUser?.id
        if (userId === id) {
            res.status(401).json({ status: 401, message:'You already Owner' })
        }
        else {
            if (!userList?.UserIncludes.includes(id)) {
                await userList?.updateOne({
                    $push: {
                        UserIncludes: id,
                    },
                })
                res.status(200).json({ status: 200, message: 'You Now In Queue, Wait When Owner Start' }) 
            }
            else {
                res.status(403).json({ status: 403, message: 'You already in Queue', userId }) 
            }
        }

        next()
    }
    catch (err: any) {
        res.status(500).json({ message: err.message })
    }
}

export const AuctionsController = async (req: Request | any, res: Response, next: NextFunction) => {
    try {

        // Ids
        const userId = req.user._id
        const RoomsId = req.params.id
        
        // get Product 
        const RoomArea = await RoomsModel.findById(RoomsId)
        if (RoomArea) {
            // Check if user id is Owner
            const checkUserId = await RoomsModel.findOne({ Owner: userId })
            if (checkUserId && req.body.start === true) {
                const Products = await ProductModel.findById( RoomArea.ProductId )
                
                if (RoomArea.UserIncludes.includes(userId)) {
                    
                    const NewCost = req.body.cost
                    PrivetArea(RoomsId, NewCost)
                    res.status(200).json({ status: 200, message: 'Start', Products, RoomArea })
                }
                else {
                    res.status(402).json({ status: 402, message: 'Time to include Queue is end' })
                }

            }
            else {
                res.status(402).json({ status: 402, message: 'Auction not start yet' })
            }
        }
        else {
            res.status(404).json({ status: 404, message: 'Product not found' })
        }

        next()
    }
    catch (err: any) {
        res.status(500).json({ message: err.message })
    }
}