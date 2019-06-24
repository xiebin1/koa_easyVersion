const Router = require('koa-router')
const router = new Router();

router.prefix('/news');

router.get('/', (ctx) => {
    ctx.body = 'hellow, i‘m is news html!'
})


module.exports = router