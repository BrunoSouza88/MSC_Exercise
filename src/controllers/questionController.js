const {
  getAllService,
  createQuestionService,
  deleteQuestionService,
} = require('../services/questionService');
// at this point we gonna use this file to give back some kind of feedback

const getAllController = async (_req, res) => { // this function will work as some intermediate between req and response
  const questions = await getAllService();
  return res.status(200).json(questions);
};

const createQuestionController = async (req, res) => { // POST needs a req.body to grab the question
  const question = req.body; // get the body, and it's an object at this moment
  const newQuestion = await createQuestionService(question); // prev function will 'break' it to get what is necessary. in this case question passed inside the object question up above, and the insertedID as you can see at questionService.js file
  return res.status(201).json(newQuestion); // return it with proper status 
};

const deleteQuestionController = async (req, res) => {
  const { id } = req.params;
  await deleteQuestionService(id);
  return res.status(204).json({ message: 'Question was deleted' });
};

module.exports = {
  getAllController,
  createQuestionController,
  deleteQuestionController,
};
