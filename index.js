const Koa = require( 'koa' )
const app = new Koa()

app.use( async function(ctx) {
  ctx.body = {
    code: 0,
    body: {
      hello: 'world'
    }
  }
} )

app.listen( 7000 )
