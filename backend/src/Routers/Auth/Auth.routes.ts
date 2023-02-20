import { Router } from 'express'
import { RegisterController } from '../../Controllers/Auth/Register'

const router = Router()

router.post('/register', RegisterController)

export default router