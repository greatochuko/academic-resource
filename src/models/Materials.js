import mongoose from "mongoose";

const { Schema } = mongoose;

const materialSchema = new Schema({
  file: {
    type: String,
    required: true,
  },
  fileName: {
    type: String,
    required: true,
  },
  fileType: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
});

// export default mongoose.models.User || mongoose.model('User', userSchema)
// export default mongoose.model('Users', userSchema)

const Material =
  mongoose.models?.Material || mongoose.model("Material", materialSchema);

export default Material;
