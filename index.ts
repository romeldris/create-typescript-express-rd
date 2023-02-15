import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser'
import morgan from 'morgan'

dotenv.config()

const app: Express = express()
const port = process.env.PORT || 3000

app.use(morgan('combined'))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req: Request, res: Response) => {
  res.send('hello from my server :d')
})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})
