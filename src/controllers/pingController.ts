import { Request, Response } from "express";

export const pingCheck = (req: Request, res: Response): void => {
  res.status(200).json({
    message: "Ping check ok",
  });
};
