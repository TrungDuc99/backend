import { Router } from "express";

import CategoryCallback from "../controller/Category";
const CategoryRouter = Router();

CategoryRouter.get("/", CategoryCallback.get);
CategoryRouter.post("/", CategoryCallback.create);
CategoryRouter.put("/:id", CategoryCallback.update);
CategoryRouter.delete("/:id", CategoryCallback.delete);

export default CategoryRouter;
