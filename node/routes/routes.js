import express from 'express'
import { createUser, login } from '../controllers/UserController.js'

const router = express.Router()

// crear un usuario
router.post('/', createUser)

router.post('/login', login)

export default router