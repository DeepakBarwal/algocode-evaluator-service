import express, { Express } from 'express'

import serverConfig from './config/serverConfig'
import apiRouter from './routes'
import sampleQueueProducer from './producers/sampleQueueProducer'
import SampleWorker from './workers/sampleWorker'

const app: Express = express()

app.use('/api', apiRouter)

app.listen(serverConfig.PORT, () => {
  console.log(`Server started at port: ${serverConfig.PORT}`)

  SampleWorker('SampleQueue')

  sampleQueueProducer('SampleJob', {
    name: 'Deepak',
    company: 'Redsoft',
    position: 'Frontend',
    location: 'Remote'
  }).catch(err => console.error(err))
})
