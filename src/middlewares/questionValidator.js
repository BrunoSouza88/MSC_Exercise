const questionValidator = async (req, res, next) => {
  const question = req.body;

  if (!question) {
    return res.status(422).json({ message: 'Invalid question formart' });
  }
  if (question.question === undefined || question.question === null) {
    return res.status(422).json({ message: 'Question is required' });
  }
  if (typeof question.question !== 'string') {
    return res.status(422).json({ message: 'Question should be a string' });
  }
  next();
};

const checkIdNumber = (userId) => typeof userId !== 'number' || !Number.isInteger(userId);

const userIdValidator = async (req, res, next) => {
  const question = req.body;
  const { userId } = question;

  if (!question) {
    return res.status(422).json({ message: 'Invalid question formart' });
  }
  if (userId === undefined || userId === null) {
    return res.status(422).json({ message: 'User id is required' });
  }
  if (checkIdNumber(userId)) {
    return res.status(422).json({ message: 'User id should be a integer' });
  }
  next();
};

module.exports = { questionValidator, userIdValidator };