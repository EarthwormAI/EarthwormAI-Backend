import { Router } from 'express'
import { errorHandler, healthCheck, indexRoute, notFound } from '../controllers'

const router = Router()

router.get('/', indexRoute)

router.get('/health', healthCheck)

router.all('*', notFound)

router.use(errorHandler)

export default router
