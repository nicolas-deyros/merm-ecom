import express from 'express'
import mongoose from 'mongoose'
import {
	authUser,
	getUserProfile,
	registerUser,
	updateUserProfile,
} from '../controllers/userControlers.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.post('/login', authUser)
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)
router.route('/').post(registerUser)

export default router
