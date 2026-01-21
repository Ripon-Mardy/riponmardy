import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: { type: String, required: true },
    github: { type: String, required: true },
    live: { type: String, required: true },
    tags: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true },
);

export default mongoose.models.Project ||
  mongoose.model("Project", projectSchema);
