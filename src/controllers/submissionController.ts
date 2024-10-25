import { Request, Response } from 'express'

import { CreateSubmissionDto } from '../dtos/CreateSubmissionDto'

export function addSubmission(req: Request, res: Response): void {
  const submissionDto = req.body as CreateSubmissionDto

  //   TODO: Add validation logic using zod

  res.status(200).json({
    success: true,
    error: {},
    message: 'Successfully collected the submission',
    data: submissionDto
  })
}
