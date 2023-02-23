// Imports
import { Schema, model, Document } from 'mongoose'

// Interface
export interface ProductsInterFace {
    Owner: Schema.Types.ObjectId
    ProductName: string
    ProductSubTitle: string
    ProductDescription: string
    ProductCost: number
    isAuction: boolean
    isStore: boolean
    ImageUrl: [string]
    NumberOfRoom: number
}

export interface ProductDocument extends ProductsInterFace, Document {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    toJSON: () => any // any for now
}

// Schema



const ProductSchema: Schema<ProductsInterFace> = new Schema({
    Owner: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    ProductName: {
        type: String,
        required: true,
    },
    ProductSubTitle: {
        type: String,
        maxlength: 30,
        required: true,
    },
    ProductDescription: {
        type: String,
        minlength: 12,
        maxlength: 250,
        required: true,
    },
    ProductCost: {
        type: Number,
        min: 100,
        required: true,
    },
    isAuction: {
        type: Boolean,
        default: false,
    },
    isStore: {
        type: Boolean,
        default: false,
    },
    ImageUrl: {
        type: [String],
        default:[],
    },
    NumberOfRoom: {
        type: Number,
        max: 4,
        min: 1,
        required: true,
    },
}, {
    timestamps: true,
})

export const ProductModel = model('Product', ProductSchema)
// Function
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function toJSON(this: any) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const product = this
    const productObject = product.toObject()
    delete productObject.__v
    return productObject
}

ProductSchema.methods.toJSON = toJSON
