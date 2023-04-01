const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Porfavor añade una tarea"],
  },
  completed: {
    type: Boolean,
    required: true,
    default: false,
  },
},
{
    timestamps: true
}
);

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
