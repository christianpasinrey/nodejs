import {Router} from 'express';
const router = Router();
let h1 = {
    home: 'Home',
    about: 'About me',
    contact: 'Contact',
    skills: 'Skills',
    blog: 'Blog',
}

router.get('/', (req, res) => {
    res.render(
        'main',{h1:h1.home})
}); //render index.ejs on / route
router.get('/about-me', (req, res) => {
    res.render(
        'about-me',{h1:h1.about})
}); //render index.ejs on / route
router.get('/skills', (req, res) => {
    res.render(
        'skills',{h1:h1.skills})
});
router.get('/blog', (req, res) => {
    res.render(
        'blog',{h1:h1.blog})
});
 //render index.ejs on / route
export default router;