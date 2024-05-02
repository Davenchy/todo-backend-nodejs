import { Router } from 'express';
import Todo from '../models/todo.js';

const router = Router();

const getTodoItem = async (req, res, next) => {
  const todo = await Todo.findById(req.params.id);
  if (!todo)
    return res.status(404).json({error: 'Todo not found'});
  req.todo = todo;
  next();
};

// get all todo
router.get('/', async (_, res) => {
  const todoList = await Todo.find();
  res.json(todoList);
});

// get todo by id
router.get('/:id', getTodoItem, async (req, res) => res.json(req.todo));

// toggle todo complete state by id
router.get('/:id/toggle', getTodoItem, async (req, res) => {
  const todo = req.todo;
  todo.completed = !todo.completed;
  await todo.save();
  res.json(todo);
});

// create a todo
router.post('/', async (req, res) => {
  const {body} = req.body;
  if (!body)
    return res.status(400).json({error: 'Please add a body to the todo'});
  const todo = new Todo({body});
  await todo.save();
  res.json(todo);
});

// delete a todo by id
router.delete('/:id', getTodoItem, async (req, res) => {
  try {
    const todo = req.todo;
    await todo.remove();
    res.json(todo);
  } catch (err) {
    res.errored(err);
  }
});

// update todo body by id
router.put('/:id', getTodoItem, async (req, res) => {
  const { body, completed } = req.body;
  if (body) req.todo.body = body;
  if (completed !== undefined) req.todo.completed = completed;
  await req.todo.save();
  res.json(req.todo);
});

export default router;
