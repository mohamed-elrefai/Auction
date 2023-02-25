import { Router } from 'express'
import { verifyToken } from '../../Middleware/Aurh.middleware'
import { AuctionsController, AddUserAuctionsController } from '../../Controllers/AuctionSystem/Auction.Controller'
const router = Router()

router.get('/areaauction/:id', verifyToken, AuctionsController)
router.put('/adduserauction/:id', verifyToken, AddUserAuctionsController)

export default router