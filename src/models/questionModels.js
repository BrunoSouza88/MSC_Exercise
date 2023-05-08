const connection = require('./connection');

const getAllModel = async () => { // create a function to get all questions from DB
  const [result] = await connection.execute('SELECT * FROM slido_db.questions;'); // SQL command to get all info from a table question
  // important to notice the destructuring, we want the first position of the array (this always return a array). second item of this array is a metadate
  return result;
};

const createQuestionModel = async ({ question }) => { // since this question is comming from req.body and its an obj,
  const [{ insertId }] = await connection.execute( // get the insertId from the POST because it's auto_implemented
    'INSERT INTO slido_db.questions (question) VALUES (?);', // SQL command to insert a question into database and table
    [question],
  );
  return { id: insertId, question }; // uses the inserted ID as new ID to the question, and shorthand question
};

const deleteQuestionModel = async (questionID) => {
  await connection.execute(
    'DELETE FROM slido_db.questions WHERE id = ?;',
    [questionID],
  );
  return true;
};

module.exports = { 
  getAllModel,
  createQuestionModel,
  deleteQuestionModel,
}; 