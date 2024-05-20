const Router = require('koa-router');

const roleControler = require('../../controllers/role');

const router = new Router();

router.get('/', roleControler.getAll);
router.post('/', roleControler.add);
router.delete('/:id', roleControler.remove);

module.exports = router;