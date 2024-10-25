import express, { Express } from 'express'
import { Router } from 'express'

import bullBoardAdapter from './config/bullBoardConfig'
import serverConfig from './config/serverConfig'
import apiRouter from './routes'
// import sampleQueueProducer from './producers/sampleQueueProducer'
// import SampleWorker from './workers/sampleWorker'

const app: Express = express()

app.use(express.urlencoded())
app.use(express.json())
app.use(express.text())

app.use('/api', apiRouter)
app.use('/ui', bullBoardAdapter.getRouter() as Router)

app.listen(serverConfig.PORT, () => {
  console.log(`Server started at *: ${serverConfig.PORT}`)
  console.log(
    `BullBoard dashboard running on *: http://localhost:${serverConfig.PORT}/ui`
  )

  // SampleWorker('SampleQueue')

  // sampleQueueProducer(
  //   'SampleJob',
  //   {
  //     name: 'Deepak',
  //     company: 'Redsoft',
  //     position: 'Frontend',
  //     location: 'Remote'
  //   },
  //   2
  // ).catch(err => console.error(err))
  // sampleQueueProducer(
  //   'SampleJob',
  //   {
  //     name: 'Deepak',
  //     company: 'Redsoft',
  //     position: 'Fullstack',
  //     location: 'Remote'
  //   },
  //   1
  // ).catch(err => console.error(err))
})
