// seed/symptomsSeeder.js
import mongoose from "mongoose";
import { connectDB } from "../db/connectDb.js";
import dotenv from "dotenv";
import { Symptom } from "../models/Symptom.js";

dotenv.config(); // loads .env

await connectDB();

await Symptom.deleteMany(); // Optional: clear old rules

await Symptom.insertMany([
  {
    illness: 'Malaria',
    symptoms: ['fever', 'chills', 'headache', 'sweating', 'nausea', 'vomiting'],
    treatment: 'Take antimalarial medication and consult a doctor.'
  },
  {
    illness: 'Typhoid Fever',
    symptoms: ['fever', 'abdominal pain', 'diarrhea', 'fatigue', 'loss of appetite', 'headache'],
    treatment: 'Use prescribed antibiotics and rest. See a healthcare provider.'
  },
  {
    illness: 'Sinusitis',
    symptoms: ['facial pain', 'nasal congestion', 'headache', 'loss of smell', 'cough'],
    treatment: 'Use decongestants and possibly antibiotics.'
  },
  {
    illness: 'Migraine',
    symptoms: ['headache', 'nausea', 'sensitivity to light', 'visual aura'],
    treatment: 'Use migraine-specific pain relievers and rest in a dark, quiet place.'
  },
  {
    illness: 'Headache',
    symptoms: ['headache', 'tightness around head', 'neck pain', 'fatigue'],
    treatment: 'Pain relievers and relaxation techniques help.'
  },
  {
    illness: 'Fever',
    symptoms: ['high fever', 'severe headache', 'joint pain', 'rash', 'nausea'],
    treatment: 'Stay hydrated and avoid NSAIDs. See a doctor.'
  },
  {
    illness: 'COVID-19',
    symptoms: ['fever', 'dry cough', 'tiredness', 'loss of taste or smell', 'headache'],
    treatment: 'Isolate, rest, and seek medical help. Antivirals may be required.'
  },
  {
    illness: 'Anemia',
    symptoms: ['fatigue', 'pale skin', 'shortness of breath', 'dizziness', 'headache'],
    treatment: 'Iron supplements and dietary changes. See a doctor.'
  },
  {
    illness: 'Hypertension',
    symptoms: ['headache', 'blurred vision', 'chest pain', 'dizziness'],
    treatment: 'Use antihypertensives and reduce salt intake.'
  },
  {
    illness: 'Meningitis',
    symptoms: ['severe headache', 'stiff neck', 'fever', 'sensitivity to light', 'nausea'],
    treatment: 'Medical emergency. Requires immediate antibiotics or antivirals.'
  },
  {
    illness: 'Dehydration',
    symptoms: ['thirst', 'dry mouth', 'headache', 'dizziness', 'fatigue'],
    treatment: 'Drink fluids with electrolytes. Severe cases need IV fluids.'
  }
]);

console.log("✅ Seeding completed");
process.exit(); // Exit the script
