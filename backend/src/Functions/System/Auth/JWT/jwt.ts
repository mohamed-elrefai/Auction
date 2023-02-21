import jwt from 'jsonwebtoken'

export const maxAge = 7 * 24 * 60 * 60 * 1000

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createToken = (_id: any) => {

    const TokenSecret = process.env.TokenSecret as string
    return jwt.sign({ _id }, TokenSecret, { expiresIn: maxAge })
}