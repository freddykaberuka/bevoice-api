import express from 'express'
import articleController from '../controllers/article.controller'

const router = express.Router()

router.post('/add', articleController.addArticle);
router.get('/view', articleController.viewArticle);
router.get('/view/:id', articleController.showArticle);
router.delete('/view/:id', articleController.deleteArticle);
router.patch('/view/:id', articleController.updateArticle);

export default  router;

