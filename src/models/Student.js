import mongoose from "mongoose";

const { Schema } = mongoose;

const studentSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// export default mongoose.models.User || mongoose.model('User', userSchema)
// export default mongoose.model('Users', userSchema)

const Student =
  mongoose.models?.Student || mongoose.model("Student", studentSchema);

export default Student;
