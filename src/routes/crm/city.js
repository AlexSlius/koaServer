const Router = require('koa-router');

const cityControler = require('../../controllers/city');

const router = new Router();

router.get('/', cityControler.getAll);
router.post('/', cityControler.add);
router.delete('/:id', cityControler.remove);

module.exports = router;