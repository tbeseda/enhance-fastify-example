import Fastify from 'fastify'
import Enhance from '@enhance/fastify-plugin'

const app = Fastify()

app.register(Enhance, { possible: 'options' })

app.listen({ port: 3000 }, () => {
  console.log('Server listening on port 3000')
})
