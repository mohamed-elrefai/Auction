import { Request, Response, NextFunction } from 'express'
import { ProductModel } from '../../Model/Products/Products'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const GetProductController = async (req: Request | any, res: Response, next: NextFunction) => {
    try {
        const product = await ProductModel.findById(req.params.id)

        res.status(200).json({ status: 200, product })
        next()
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    catch (err: any) {
        res.status(500).json({ message: err.message })
    }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const GetAllProductController = async (_req: Request | any, res: Response, next: NextFunction) => {
    try {
        const product = await ProductModel.find()

        res.status(200).json({ status: 200, product })
        next()
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    catch (err: any) {
        res.status(500).json({ message: err.message })
    }
}