const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
  contenu: { type: String, required: true },
  userId: { type: String, required: true },
  carId: { type: String, required: true }
});

module.exports = mongoose.model('Comment', commentSchema);