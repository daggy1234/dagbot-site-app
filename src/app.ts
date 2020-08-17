import express, { Application,Request, Response} from 'express'
const app: express.Application = express()   
require('dotenv/config')
const Sentry = require('@sentry/node')
const IsAuth = require('./middleware/auth')
const httpLogger = require('./middleware/httplogger')
let logger = require('./utils/logger')
const getRoutes = require('./routes/get')
const postRoutes = require('./routes/forms')
const StatRoute = require('./routes/stats')
let Site = require('./routes/site')
let cors = require('cors')
let path = require('path')
let port = 5000

Sentry.init({
    dsn:
        process.env.SENTRY_URL!,
})

app.use(Sentry.Handlers.requestHandler())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(httpLogger)
app.use(IsAuth)
app.use('/api/', getRoutes)
app.use('/api/', postRoutes)
app.use('/api/', StatRoute)
app.use(express.static(path.join(__dirname, 'client', 'build')))
app.use(Sentry.Handlers.errorHandler())

app.get('*', (req:Request, res:Response) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
})

app.listen(port, () => {
    logger.info(`Started Server on ${port}`)
})
