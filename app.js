import express from 'express'
import { ENV } from './src/config/secret.js'
import { connectDb } from './src/config/db.js'
import morgan from 'morgan'
import cors from 'cors'
import { linkRouter } from './src/routes/link.js'

const app = express()

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());

await connectDb(ENV.MONGO_URI)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/link', linkRouter)

app.listen(ENV.PORT, () => {
  console.log(`Example app listening on port ${ENV.PORT}`)
})

