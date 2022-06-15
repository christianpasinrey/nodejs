import {Router} from 'express';
const router = Router();
router.get('/', (req, res) => res.render('index')); //render index.ejs on / route
router.get('/about-me', (req, res) => res.render('about-me')); //render index.ejs on / route
router.get('/skills', (req, res) => res.render('skills')); //render index.ejs on / route
export default router;