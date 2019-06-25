const compose = require('koa-compose');
const glob = require('glob');
const { resolve } = require('path');

registerRouter = () => {
    let routers = [];
    console.log(glob.sync(resolve(__dirname,'./', '**/*.js')).filter( (v) => (v.indexOf('index') === -1)))
    glob.sync(resolve(__dirname,'./', '**/*.js'))
        .filter( (v) => (v.indexOf('index.js') === -1))
        .map( router => {
           
            routers.push(require(router).routes())
            routers.push(require(router).allowedMethods())
        })
        // console.log(routers)
        return compose(routers)
}

module.exports = registerRouter;
