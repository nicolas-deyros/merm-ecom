import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
// import cors from 'cors'
import colors from 'colors'
import connectDB from './config/db.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'

const PORT = process.env.PORT || 5000

dotenv.config()

connectDB()

const app = express()

app.use(express.json())

// const allowedOrigins = ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:5000']
// app.use(
// 	cors({
// 		origin: function (origin, callback) {
// 			if (!origin || allowedOrigins.indexOf(origin) !== -1) {
// 				callback(null, true)
// 			} else {
// 				callback(new Error('Not allowed by CORS'))
// 			}
// 		},
// 	})
// )

app.get('/', (req, res) => {
	res.send('API is running...')
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

app.use(notFound)

app.use(errorHandler)

app.listen(
	PORT,
	console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold)
)
