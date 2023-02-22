import { Router } from 'express'
import { GetUserController, UpdateUserController, DeleteUserController } from '../../Controllers/User/User.Controller'
import { verifyToken } from '../../Middleware/Aurh.middleware'
const router = Router()

router.get('/getuser', verifyToken, GetUserController)
router.put('/updateuser', verifyToken, UpdateUserController)
router.delete('/deleteuser', verifyToken, DeleteUserController)

export default router