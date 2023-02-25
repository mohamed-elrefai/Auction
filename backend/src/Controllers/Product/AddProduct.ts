import { Request, Response, NextFunction } from 'express'
import { ProductModel } from '../../Model/Products/Products'
import { RoomsModel } from '../../Model/Rooms/Rooms.model'
import { cloudinaryImageUploadMethod } from '../../Functions/Upload/Cloudinary'
import { ProductDTO } from './DTO/AddProduct.dto'

export const AddProductsController = async (req: Request | any, res: Response, next: NextFunction) => {
    try {
        if (req.user.__t === 'Organization') {
            const products: ProductDTO = req.body

            products.Owner = req.user._id

            // Image Handel
            const urls = []

            let files: any
            // eslint-disable-next-line prefer-const
            files = req.files
            for (const file of files) {
                const { path } = file

                const newPath = await cloudinaryImageUploadMethod(path)
                urls.push(newPath)
            }

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const multiImage = urls.map((url: any) => url.res)

            products.ImageUrl = multiImage

            const AddProduct = await new ProductModel(products)
            const saveProduct = await AddProduct.save()

            const date = products.day + '/' + products.month + '/' + '2023 at time: ' + products.time
            
            // Add to Rooms
            const RoomNumber = products.NumberOfRoom
            const Owner = req.user._id
            const ProductId = saveProduct.id
            const StartCost = products.ProductCost
            const dateOfAuction = date

            const rooms = await new RoomsModel({ RoomNumber, Owner, ProductId, StartCost, dateOfAuction })
            const saveRooms = await rooms.save()
            res.status(200).json({ saveProduct, saveRooms })
            next() 
        }
        else {
            res.status(402).json({ status: 402, message: 'you cant add product' })
        }
        next()
    }
    catch (err: any) {
        res.status(500).json({ message: err.message })
    }
}