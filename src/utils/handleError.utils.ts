import { Response } from 'express';


function handleHttpError(
  res: Response,
  message: string = 'Ooops something happened',
  code: number = 443
): void {
  res.status(code);
  res.send({ message });
}

export default handleHttpError;