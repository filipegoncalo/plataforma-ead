const express = require('express');

const router = express.Router();

const QuestionController = require('../controllers/QuestionController');

router.get("/questions",QuestionController.show);

router.get("/questions/teste",QuestionController.selectByTest);

router.post("/questions",QuestionController.addQuestion);

router.put("/questions",QuestionController.changeQuestion);

router.delete("/questions",QuestionController.removeQuestion);

router.delete("/questions/teste",QuestionController.removeQuestionByTest);

module.exports = router;