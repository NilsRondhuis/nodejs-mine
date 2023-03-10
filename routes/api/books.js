const express = require("express");
const Joi = require("joi");
const router = express.Router();
const books = require("../../models/books");
const helper = require("../../helpers");

const addSchema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
});

router.get("/", async (req, res, next) => {
  try {
    const result = await books.getAll();
    res.json(result);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const result = await books.getById(req.params.id);
    if (!result) {
      throw helper.HttpError(404, "NotFound");
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { error } = addSchema.validate(req.body);
    if (error) {
      throw helper.HttpError(400, error.message);
    }
    const result = await books.add(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const result = await books.update(req.params.id, req.body);
    if (!result) {
      throw helper.HttpError(404, "NotFound");
    }
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const result = await books.deleteById(req.params.id);
    if (!result) {
      throw helper.HttpError(404, "NotFound");
    }
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
