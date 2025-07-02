// seed/symptomsSeeder.js
import mongoose from "mongoose";
import { connectDB } from "../db/connectDb.js";
import dotenv from "dotenv";
import { Symptom } from "../models/Symptom.js";

dotenv.config(); // loads .env

await connectDB();

await Symptom.deleteMany(); // Clear existing

await Symptom.insertMany([
  {
    illness: 'Malaria',
    symptoms: ['fever', 'chills', 'headache', 'sweating', 'nausea', 'vomiting'],
    treatment: 'Antimalarial drugs (e.g., Artemether-lumefantrine)',
    dosage: 'Take as prescribed for 3 days. Usually twice daily.',
    recommendation: 'Avoid mosquito exposure. Drink plenty of fluids. See a doctor if symptoms persist.'
  },
  {
    illness: 'Typhoid Fever',
    symptoms: ['fever', 'abdominal pain', 'diarrhea', 'fatigue', 'loss of appetite', 'headache'],
    treatment: 'Prescribed antibiotics (e.g., ciprofloxacin or azithromycin)',
    dosage: 'Usually 7–14 days, as directed by doctor',
    recommendation: 'Maintain hydration. Eat light, soft meals. Follow full antibiotic course.'
  },
  {
    illness: 'Sinusitis',
    symptoms: ['facial pain', 'nasal congestion', 'headache', 'loss of smell', 'cough'],
    treatment: 'Decongestants or antibiotics if bacterial',
    dosage: 'Use nasal spray for 3–5 days max. Antibiotics only if prescribed.',
    recommendation: 'Steam inhalation helps. Avoid allergens.'
  },
  {
    illness: 'Migraine',
    symptoms: ['headache', 'nausea', 'sensitivity to light', 'visual aura'],
    treatment: 'Migraine painkillers (e.g., sumatriptan)',
    dosage: 'Take at onset of symptoms. Max 2 doses per day.',
    recommendation: 'Stay in a dark, quiet room. Avoid known triggers.'
  },
  {
    illness: 'Headache',
    symptoms: ['headache', 'tightness around head', 'neck pain', 'fatigue'],
    treatment: 'Pain relievers like paracetamol or ibuprofen',
    dosage: '1–2 tablets every 6 hours if needed',
    recommendation: 'Hydrate. Avoid stress. Try gentle massage or rest.'
  },
  {
    illness: 'COVID-19',
    symptoms: ['fever', 'dry cough', 'tiredness', 'loss of taste or smell', 'headache'],
    treatment: 'Supportive care or antivirals in severe cases',
    dosage: 'Follow doctor’s advice or hospital protocol',
    recommendation: 'Isolate, rest, monitor breathing. Call emergency if worsens.'
  },
  {
    illness: 'Anemia',
    symptoms: ['fatigue', 'pale skin', 'shortness of breath', 'dizziness', 'headache'],
    treatment: 'Iron supplements and improved nutrition',
    dosage: 'Ferrous sulfate 325mg once or twice daily (as prescribed)',
    recommendation: 'Eat iron-rich foods. Monitor hemoglobin levels.'
  }
]);

console.log("✅ Seeding completed");
process.exit();
