const express = require('express');
const  {protect}  = require('../middleware/auth');
const {
  getTasks,
  getTaskStats,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
} = require('../controllers/taskController');

const router = express.Router();

// router.use(protect);

router.get('/stats',protect, getTaskStats);
router.get("/",protect,getTasks);
router.post("/",protect,createTask)
router.get('/:id',protect,getTaskById)
router.put('/:id',protect,updateTask)
router.delete("/:id",protect,deleteTask)
module.exports = router;
