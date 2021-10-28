import express from 'express'
import contactController from '../controllers/contact'
const router = express.Router()

router.post('/message',contactController.addMessage)
router.get('/message',contactController.showMessages)
router.get('/message/:id',contactController.showMessage)
router.delete('/message/:id',contactController.deleteMessage)
export default router