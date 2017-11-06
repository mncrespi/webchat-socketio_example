import express                from 'express'
import apiRoutes              from './api/index'
import chatRoutes             from './chat/index'


const router = express.Router()   	// eslint-disable-line new-cap


/** API routes at /api */
router.use('/api', apiRoutes)


/** WebChat routes at /chat */
router.use('/chat', chatRoutes)

/** GET - Root Dir */
router.get('/', (req, res) => {
  res.send('Welcome to Node Scaffolding')
})


export default router
