import { Schema } from 'mongoose'
import { Client } from './User.Model'
import { UserModel } from './User.Model'
import { AddressSchema } from './Organization'

export const clientSchema: Schema<Client> = new Schema({
    gender: {
        type: String,
        required: true,
    },
    location: AddressSchema,

}, {
    discriminatorKey: 'userChoice',
})

export const clientModel = UserModel.discriminator('Client', clientSchema)