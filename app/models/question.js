// app/models/question.js
var mongoose = require('mongoose');

var questionSchema = mongoose.Schema({
  question_id: { type: String, required: true, index: { unique: true } },
  question: { type: Date, required: false },
  answer: { type: String, required: false },
  difficulty: { type: Number, required: false }
});

var Question = mongoose.model('Question', questionSchema);

module.exports = Question;
