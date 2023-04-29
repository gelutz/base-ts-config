import express from 'express'

import './config/dotenv'

const app = express()

app.use(express.json())

app.listen(process.env.API_PORT, () => console.log('Server listening'))
