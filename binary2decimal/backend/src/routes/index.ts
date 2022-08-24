import { Router } from "express";
import { Controller } from "../controllers";

const route = Router()
const controller = new Controller()

route.post('/', controller.handle)

export { route }