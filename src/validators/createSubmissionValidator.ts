import { NextFunction, Request, Response } from 'express'
import { ZodSchema } from 'zod'

export const validate =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function (schema: ZodSchema<any>) {
    return (req: Request, res: Response, next: NextFunction) => {
      try {
        schema.parse({
          ...req.body
        })

        next()
      } catch (error: unknown) {
        console.error(error)
        res.status(400).json({
          success: false,
          message: 'Invalid request params received',
          data: {},
          error
        })
      }
    }
  }
