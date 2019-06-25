const Router = require('koa-router')
const router = new Router();
const userService = require('../db/myConfig.js')


router.prefix('/User');

router.post('/', async (ctx) => {

    ctx.body = await userService.findAllData();

})

router.post('/adduser', async (ctx) => {
    console.log(ctx.request.body)
    let userArr = [];
    userArr.push(ctx.request.body['username']);
    userArr.push(ctx.request.body['password']);
    console.log(userArr)
    let result = await userService.adduserData(userArr);
    // console.log(result)
    if (result.affectedRows != 0) {
        ctx.body = await userService.findAllData();
    }
})


module.exports = router
