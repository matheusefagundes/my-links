import 'dotenv/config'
import express, { Express, json, static as staticFiles } from 'express'
import mainRouter from './main/main.router'

const app: Express = express()

// view engine
app.set('view engine', 'pug')

// middlewares
app.use(json())
app.use(staticFiles('public'))

// routes
app.use('/', mainRouter)

// start server
const port: string | undefined = process.env.PORT
app.listen(port, () => {
  console.log(`Server listening on port ${port}.`)
})
