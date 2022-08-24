import { Binary } from "../utils/convert";
import { Request, Response } from "express";

export class Controller {
  handle(req: Request, res: Response) {
    const { binaryNumber } = req.body;

    const binary = Binary.convertToDecimal(binaryNumber);

    return res.send({binary})
  }
}
