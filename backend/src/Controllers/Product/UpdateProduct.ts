import { Request, Response, NextFunction } from 'express'
import { ProductModel } from '../../Model/Products/Products'

export const UpdateProductController = async (req: Request | any, res: Response, next: NextFunction) => {
    try {
        await ProductModel.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        })

        res.status(200).json({ status: 200, message: 'Success Update Product' })
        next()
    }
    catch (err: any) {
        res.status(500).json({ message: err.message })
    }
}