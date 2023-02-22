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

