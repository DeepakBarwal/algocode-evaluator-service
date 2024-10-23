import { Job, Worker } from 'bullmq'

import SampleJob from '../jobs/SampleJob'
import redisConnection from '../config/redisConfig'

type SampleJobData = Record<string, unknown>

export default function SampleWorker(queueName: string) {
  new Worker(
    queueName,
    async (job: Job) => {
      console.log('Sample job worker kicks in')

      if (job.name === 'SampleJob') {
        const sampleJobInstance = new SampleJob(job.data as SampleJobData)

        sampleJobInstance.handle(job)

        return true
      }
    },
    { connection: redisConnection }
  )
}
