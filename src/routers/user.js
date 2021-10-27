import express from 'express'
import userController from '../controllers/user'

const router = express.Router()

router.post('/signup', userController.signUp);
router.post('/login', userController.logIn);
export default  router;
