import { Request, Response, NextFunction } from 'express'
import { ProductModel } from '../../Model/Products/Products'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const UpdateProductController = async (req: Request | any, res: Response, next: NextFunction) => {
    try {
        await ProductModel.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        })

        res.status(200).json({ status: 200, message: 'Success Update Product' })
        next()
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    catch (err: any) {
        res.status(500).json({ message: err.message })
    }
}