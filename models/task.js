const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  name : {
    type: String,
    required: [true, "Name field cannot be empty"],
    maxlength: [20, "Cannot exceed 20 characters"],
    trim: true
  },

  completed : {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('Task', TaskSchema)