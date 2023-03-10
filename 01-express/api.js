const { nanoid } = require("nanoid");
const express = require("express");
const router = express.Router();

let tasks = [
  {
    id: nanoid(),
    title: "Work",
    text: "Do it!",
    done: false,
  },
  {
    id: "3",
    title: "Works",
    text: "Do it now!",
    done: false,
  },
];

router.get("/tasks", (req, res, next) => {
  res.json({
    status: "success",
    code: 200,
    data: {
      tasks,
    },
  });
});

router.get("/tasks/:id", (req, res, next) => {
  const { id } = req.params;
  const [task] = tasks.filter((task) => task.id === id);
  res.json({
    status: "success",
    code: 200,
    data: { task },
  });
});

router.post("/tasks", (req, res, next) => {
  const { title, text } = req.body;
  const task = {
    id: nanoid(),
    title,
    text,
    done: false,
  };

  tasks.push(task);

  res.status(201).json({
    status: "success",
    code: 201,
    data: { task },
  });
});

router.put("/tasks/:id", (req, res, next) => {
  const { id } = req.params;
  const { title, text } = req.body;
  const [task] = tasks.filter((el) => el.id === id);
  task.title = title;
  task.text = text;
  res.json({
    status: "success",
    code: 200,
    data: { task },
  });
});

router.patch("/tasks/:id/status", (req, res, next) => {
  const { id } = req.params;
  const { done } = req.body;
  const [task] = tasks.filter((task) => task.id === id);
  task.done = done;
  res.json({
    status: "success",
    code: 200,
    data: { task },
  });
});

router.delete("/tasks/:id", (req, res, next) => {
  const { id } = req.params;
  const newTask = tasks.filter((task) => task.id !== id);
  tasks = [...newTask];
  res.status(204).json();
});

module.exports = router;
