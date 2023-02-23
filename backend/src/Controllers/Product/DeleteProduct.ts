import { Request, Response, NextFunction } from 'express'
import { ProductModel } from '../../Model/Products/Products'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const DeleteProductController = async (req: Request | any, res: Response, next: NextFunction) => {
    try {
        await ProductModel.findByIdAndDelete(req.params.id)

        res.status(200).json({ status: 200, message: 'Success Delete Product' })
        next()
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    catch (err: any) {
        res.status(500).json({ message: err.message })
    }
}