const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const app = new Koa();


app.use(bodyParser());


app.use(async (ctx) => {
    // console.log(ctx);
    if (ctx.url === '/' && ctx.method === 'GET') {
        let html = `
        <h2>This is demo2</h2>
        <form method="POST" action="/">
            <p>username:</p>
            <input name="username">
            <p>age:</p>
            <input name="age">
            <p>website</p>
            <input name="website">
            <button type="submit">submit</button>                   
        </form>
        `
        ctx.body = html
    }
    else if (ctx.url === '/' && ctx.method === 'POST') {
        console.log(ctx.request.body)
        let postData = ctx.request.body
        ctx.body = postData;
    }
    else {
        ctx.body = '<h2>404!</h2>'
    }
})



app.listen(3333);