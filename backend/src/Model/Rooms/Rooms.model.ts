// Imports
import { Schema, model, Document } from 'mongoose'

// Interface
export interface RoomsInterFace {
    Owner: Schema.Types.ObjectId
    RoomNumber: number 
    UserIncludes: [string]
    ProductId: Schema.Types.ObjectId
    StartCost: number
    WinID: Schema.Types.ObjectId
    dateOfAuction: string
}

export interface RoomsDocument extends RoomsInterFace, Document {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    toJSON: () => any // any for now
}

// Schema
const RoomsSchema: Schema<RoomsInterFace> = new Schema({
    RoomNumber: {
        type: Number,
        max: 4,
        min: 1,
        required: true,
    },
    UserIncludes: {
        type: [String],
        default: [],
    },
    Owner: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    ProductId: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    StartCost: {
        type: Number,
        min: 100,
        required: true,
    },
    dateOfAuction:{
        type: String,
        default: '',
    },
    WinID: {
        type: String,
        default: '',
    },

}, {
    timestamps: true,
})

export const RoomsModel = model('Rooms', RoomsSchema)
// Function
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function toJSON(this: any) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const Rooms = this
    const RoomsObject = Rooms.toObject()
    delete RoomsObject.__v
    return RoomsObject
}

RoomsSchema.methods.toJSON = toJSON
