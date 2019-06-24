const Router = require('koa-router')
const router = new Router();
const userService = require('../db/myConfig.js')


router.prefix('/User');

router.get('/', async (ctx) => {

    ctx.body = await userService.findAllData();

})

router.post('/adduser', async (ctx) => {

    let userArr = [];
    arr.push(ctx.request.body['name']);
    arr.push(ctx.request.body['pass']);
    arr.push(ctx.request.body['auth']);

    await userService.addUserData(arr)
        .then((data) => {
            let r = '';
            if (data.affectedRows != 0) {
                r = 'ok';
            }
            ctx.body = {
                data: r
            }
        }).catch(() => {
            ctx.body = {
                data: 'err'
            }
        })
})


module.exports = router
