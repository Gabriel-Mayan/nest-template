import cors from 'cors';

const configuredCors = cors({
  origin: true,
  methods: ['GET', 'PUT', 'PATCH', 'POST', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
});

export default configuredCors;
