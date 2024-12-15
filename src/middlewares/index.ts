import cors from 'cors'
import express, { Express } from 'express'
import helmet from 'helmet'

function middlewares(server: Express): Express {
  server.use([
    helmet({ contentSecurityPolicy: false }),
    cors({
      maxAge: 84600,
      optionsSuccessStatus: 200,
      origin: (process.env.NODE_ENV as string) === 'development' ? '*' : process.env.PUBLIC_FACING_URLS?.split(','),
    }),
    express.json(),
  ])

  return server
}

export default middlewares
