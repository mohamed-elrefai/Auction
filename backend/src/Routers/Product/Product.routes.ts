import { upload } from './../../Functions/Upload/Multer'
import { Router } from 'express'
import { AddProductsController, GetProductController, GetAllProductController, DeleteProductController, UpdateProductController } from '../../Controllers/Product/Product.Controller'
import { verifyToken } from '../../Middleware/Aurh.middleware'
const router = Router()

router.get('/allproducts/', verifyToken, GetAllProductController)
router.get('/products/:id', verifyToken, GetProductController)
router.post('/addproduct', upload.array('ImageUrl', 4), verifyToken, AddProductsController)
router.put('/updateproducts/:id', upload.array('ImageUrl', 4), verifyToken, UpdateProductController)
router.delete('/deleteproducts/:id', verifyToken, DeleteProductController)
export default router