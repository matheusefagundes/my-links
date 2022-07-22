import 'dotenv/config'
import express, { Express, json } from 'express'

const app: Express = express()

// middlewares
app.use(json())

// start server
const port: string | undefined = process.env.PORT
app.listen(port, () => {
  console.log(`Server listening on port ${port}.`)
})
