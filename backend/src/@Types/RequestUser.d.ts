import { Request } from 'express'
import { StoreData } from './StoreData'

export interface RequestUser extends Request {
    user: StoreData
}