import { Schema } from 'mongoose'
import { Organization } from './User.Model'
import { UserModel } from './User.Model'

// Interface
export interface address {
    street: string
    city: string
    country: string
}

export const AddressSchema: Schema<address> = new Schema({
    street:{
        type: String,
        required: true,
    },
    city:{
        type: String,
        required: true,
    },
    country:{
        type: String,
        required: true,
    },
})

export const OrganizationSchema: Schema<Organization> = new Schema({
    nationalNumber: {
        type: Number,
        required: true,
    },
    location: AddressSchema,
}, {
    discriminatorKey: 'userChoice',
})

export const OrganizationModel = UserModel.discriminator('Organization', OrganizationSchema)