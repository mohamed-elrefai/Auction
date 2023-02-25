import jwt from 'jsonwebtoken'

export const maxAge = 7 * 24 * 60 * 60 * 1000

export const createToken = (_id: any) => {

    const TokenSecret = process.env.TokenSecret as string
    return jwt.sign({ _id }, TokenSecret, { expiresIn: maxAge })
}