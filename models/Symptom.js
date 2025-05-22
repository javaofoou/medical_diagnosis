import mongoose from "mongoose";

const symptomSchema = new mongoose.Schema({
  illness: String,           // e.g. "Flu"
  symptoms: [String],          // e.g. ["fever", "cough"]
  treatment: String            // e.g. "Paracetamol and rest"
});

export const Symptom = mongoose.model("Symptom", symptomSchema);