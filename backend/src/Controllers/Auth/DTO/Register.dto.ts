import { IsString, IsNumber, IsArray } from 'class-validator'

export class RegisterDTO {

    @IsString()
    public fName: string

    @IsString()
    public lName: string
    
    @IsString()
    public username: string

    @IsString()
    public email: string
    
    @IsString()
    public password: string

    @IsString()
    public phoneNumber: string

    @IsString()
    public gender: string
    
    @IsArray()
    public location: string[]
    
    @IsNumber()
    public nationalNumber: number

}