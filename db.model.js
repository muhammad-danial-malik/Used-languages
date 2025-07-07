import mongoose from "mongoose";

const dbSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    owner: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    languages: {
      type: String,
      enum: ["HTML", "CSS", "JavaScript", "React", "Node", "Express"],
      required: true,
    },
    primary_language: {
      type: String,
      default: "JavaScript",
      required: true,
    },
  },
  { timestamps: true }
);

const dbModel = mongoose.model("dbModel", dbSchema);

export default dbModel;
