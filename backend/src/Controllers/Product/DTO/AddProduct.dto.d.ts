import { IsString, IsNumber, IsObject, IsBoolean } from 'class-validator'
import { Schema } from 'mongoose'

export class ProductDTO {

    @IsObject()
    Owner: Schema.Types.ObjectId
    
    @IsString()
    ProductName: string

    @IsString()
    ProductSubTitle: string
    
    @IsString()
    ProductDescription: string
    
    @IsNumber()
    ProductCost: number
    
    @IsBoolean()
    isAuction: boolean
    
    @IsBoolean()
    isStore: boolean
    
    @IsObject()
    ImageUrl: object[]
    
    @IsNumber()
    NumberOfRoom: number

    @IsString()
    day: string

    @IsString()
    month: string

    @IsString()
    time: string
}