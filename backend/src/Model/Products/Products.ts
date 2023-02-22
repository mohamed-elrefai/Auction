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
    ImageUrl: string[]
    NumberOfRoom: number
}

export interface ProductDocument extends ProductsInterFace, Document {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    toJSON: () => any // any for now
}

// Schema
const ProductSchema: Schema<ProductsInterFace> = new Schema({
    Owner:{
        type: Schema.Types.ObjectId,
        required: true,
    },
    ProductName:{

    },
    ProductSubTitle:{

    },
    ProductDescription:{

    },
    ProductCost:{

    },
    isAuction:{

    },
    isStore:{

    },
    ImageUrl:{

    },
    NumberOfRoom:{

    },
}, {
    timestamps: true,
})

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
