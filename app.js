import express from 'express'
import { ENV } from './src/config/secret.js'
import { connectDb } from './src/config/db.js'
import morgan from 'morgan'

const app = express()

app.use(morgan('tiny'));

await connectDb(ENV.MONGO_URI)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(ENV.PORT, () => {
  console.log(`Example app listening on port ${ENV.PORT}`)
})

