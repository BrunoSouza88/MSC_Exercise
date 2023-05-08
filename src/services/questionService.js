const { 
  getAllModel,
  createQuestionModel,
  deleteQuestionModel,
} = require('../models/questionModels');

const getAllService = async () => {
  const questions = await getAllModel();
  return questions;
};

const createQuestionService = async (question) => {
  const newQuestion = await createQuestionModel(question);
  return newQuestion;
};

const deleteQuestionService = async (questionID) => {
  const deletedeQuestion = await deleteQuestionModel(questionID);
  return deletedeQuestion;
};

module.exports = {
  getAllService,
  createQuestionService,
  deleteQuestionService,
};
