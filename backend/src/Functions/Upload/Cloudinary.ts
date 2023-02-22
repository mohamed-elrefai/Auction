import cloudinary from 'cloudinary'

export default cloudinary.v2.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
})

export const cloudinaryImageUploadMethod = async (file: any) => {
  return new Promise(resolve => {
    cloudinary.v2.uploader.upload(file, (_err: any, res: any) => {
      resolve({
        res: res.secure_url,
      })
    })
  })
}