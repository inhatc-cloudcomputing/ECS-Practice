import Fastify from 'fastify';

const fastify = Fastify({ logger: true });

fastify.get('/hello', async function (request, reply) {
  return {
    data: "hello world",
    status: 200,
  };
});

const PORT = process.env.PORT || 3001;

fastify.listen({ port: PORT, host: '0.0.0.0' }).then(() => {
  console.log(`🚀 Fastify backend running at http://0.0.0.0:${PORT}`);
});

