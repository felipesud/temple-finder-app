
const mongoose = require('mongoose');

const templeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  photoUrl: String
});

const Temple = mongoose.model('Temple', templeSchema);

module.exports = Temple;
