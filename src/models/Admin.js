import mongoose from "mongoose";

const { Schema } = mongoose;

const adminSchema = new Schema({
  adminName: {
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

const Admin = mongoose.models?.Admin || mongoose.model("Admin", adminSchema);

export default Admin;
