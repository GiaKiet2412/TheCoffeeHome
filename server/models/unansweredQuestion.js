const mongoose = require('mongoose');

const UnansweredQuestionSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true }, // ID của người dùng
    question: { type: String, required: true },
    reply: { type: String }, // Trường để lưu câu trả lời
    answeredAt: { type: Date }, // Thời gian trả lời
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('UnansweredQuestion', UnansweredQuestionSchema);