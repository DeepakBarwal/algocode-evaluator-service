import { Job, Worker } from 'bullmq'

import redisConnection from '../config/redisConfig'
import SampleJob from '../jobs/SampleJob'

type SampleJobData = Record<string, unknown>

export default function SampleWorker(queueName: string) {
  new Worker(
    queueName,
    async (job: Job) => {
      if (job.name === 'SampleJob') {
        const sampleJobInstance = new SampleJob(job.data as SampleJobData)

        sampleJobInstance.handle(job)

        return true
      }
    },
    { connection: redisConnection }
  )
}
