const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/', (req, res) => res.send('Welcome'));

router.post('/videojuegos', controllers.createVideogame);
router.get('/videojuegos', controllers.getAllVideogame);
router.put('/videojuegos/:id', controllers.updateVideogame);
router.delete('/videojuegos/:id', controllers.deleteVideogame);

module.exports = router;
