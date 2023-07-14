
const mongoose = require('mongoose');
const { Schema } = mongoose;

const templeSchema = new Schema({
  name: { 
    type: String, 
    required: true 
  },
  address: { 
    type: String, 
    required: true
   },
  telephone: {
     type: String,
      required: true 
    },
  photoUrl: { 
    type: String, 
    required: true 
  }
  }, { timestamps: true });

const Temple = mongoose.model('Temple', templeSchema);

module.exports = Temple;
