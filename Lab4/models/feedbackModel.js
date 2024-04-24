const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    sender: { type: String, required: true },
    message: { type: String, required: true },
    rating: { type: Number, required: true },
    user_id: { type: String, required: true },
  });

  module.exports = mongoose.model('Feedback', feedbackSchema);