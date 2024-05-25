const Router = require('koa-router');

const controllerGame = require('../../controllers/game');

const router = new Router();

router.post('/', controllerGame.add);
router.patch('/:id', controllerGame.edit)
router.get('/', controllerGame.getAll);
router.get('/:id', controllerGame.getOne);
router.delete('/:id', controllerGame.remove);

module.exports = router;