import express                  from 'express'
import chatCtrl                 from '../../controllers/chat'

const router = express.Router()  	// eslint-disable-line new-cap


/** Chat Index */
router.get('/', chatCtrl.index)


export default router
