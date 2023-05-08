const express = require('express').Router();

const {
  getAllController,
  createQuestionController,
  deleteQuestionController,
} = require('../controllers/questionController');

const { questionValidator, userIdValidator } = require('../middlewares/questionValidator');

const router = express;

router.get('/questions', getAllController);

router.post('/questions', questionValidator, userIdValidator, createQuestionController);

router.delete('/questions/:id', deleteQuestionController);

module.exports = router;