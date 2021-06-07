const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const carSchema = mongoose.Schema({
  marque: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  userId: { type: String, required: true },
  userPseudo: { type: String, required: true },
  price: { type: Number, required: true },
  comments: [{
    contenu: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    userid: { type: Schema.ObjectId, ref: 'User' },
    userPseudo: { type: String, required: true }
   }
  ]
});

module.exports = mongoose.model('Car', carSchema);