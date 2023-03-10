const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/books");
const { validateBody } = require("../../middlewares");
const schemas = require("../../schemas/books");

router.get("/", ctrl.getBooks);

router.get("/:id", ctrl.getById);

router.post("/", validateBody(schemas.addSchema), ctrl.add);

router.put("/:id", validateBody(schemas.addSchema), ctrl.update);

router.delete("/:id", ctrl.deleteById);

module.exports = router;
