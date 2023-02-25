import { Request, Response, NextFunction } from 'express'
import { ProductModel } from '../../Model/Products/Products'

export const DeleteProductController = async (req: Request | any, res: Response, next: NextFunction) => {
    try {
        await ProductModel.findByIdAndDelete(req.params.id)

        res.status(200).json({ status: 200, message: 'Success Delete Product' })
        next()
    }
    catch (err: any) {
        res.status(500).json({ message: err.message })
    }
}