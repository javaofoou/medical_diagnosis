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
  {
    illness: 'Diabetes',
    symptoms: ['increased thirst', 'frequent urination', 'extreme fatigue', 'blurred vision'],
    treatment: 'Insulin therapy and dietary changes. Consult a doctor.'
  },
  {
    illness: 'Asthma',
    symptoms: ['shortness of breath', 'wheezing', 'chest tightness', 'coughing'],
    treatment: 'Use bronchodilators and avoid triggers.'
  },
  {
    illness: 'Allergy',
    symptoms: ['sneezing', 'itchy eyes', 'runny nose', 'skin rash'],
    treatment: 'Antihistamines and avoiding allergens.'
  },
  {
    illness: 'Gastroenteritis',
    symptoms: ['nausea', 'vomiting', 'diarrhea', 'abdominal cramps'],
    treatment: 'Stay hydrated and rest. Seek medical help if severe.'
  },
  {
    illness: 'Pneumonia',
    symptoms: ['cough', 'fever', 'chest pain', 'shortness of breath'],
    treatment: 'Antibiotics and rest. Seek medical help.'
  },
  {
    illness: 'Tuberculosis',
    symptoms: ['persistent cough', 'weight loss', 'night sweats', 'fever'],
    treatment: 'Long-term antibiotics. Consult a healthcare provider.'
  },
  {
    illness: 'HIV/AIDS',
    symptoms: ['fever', 'fatigue', 'swollen lymph nodes', 'weight loss'],
    treatment: 'Antiretroviral therapy. Regular medical check-ups are essential.'
  },
  {
    illness: 'Hepatitis',
    symptoms: ['fatigue', 'nausea', 'abdominal pain', 'jaundice'],
    treatment: 'Consult a doctor for antiviral medications.'
  },
  {
    illness: 'Cholera',
    symptoms: ['severe diarrhea', 'vomiting', 'dehydration', 'muscle cramps'],
    treatment: 'Immediate rehydration and antibiotics. Seek medical help.'
  },
  {
    illness: 'Dengue Fever',
    symptoms: ['high fever', 'severe headache', 'joint pain', 'rash'],
    treatment: 'Pain relievers and hydration. Seek medical help if severe.'
  },
  {
    illness: 'Ebola',
    symptoms: ['fever', 'severe headache', 'muscle pain', 'vomiting'],
    treatment: 'Supportive care and experimental treatments. Seek medical help.'
  },
  {
    illness: 'Zika Virus',
    symptoms: ['fever', 'rash', 'joint pain', 'conjunctivitis'],
    treatment: 'Rest, fluids, and pain relievers. Consult a doctor.'
  },
  {
    illness: 'Chikungunya',
    symptoms: ['fever', 'joint pain', 'muscle pain', 'headache'],
    treatment: 'Pain relievers and hydration. Seek medical help if severe.'
  },
  {
    illness: 'Leptospirosis',
    symptoms: ['fever', 'headache', 'muscle pain', 'vomiting'],
    treatment: 'Antibiotics and supportive care. Consult a doctor.'
  },
  {
    illness: 'Rheumatic Fever',
    symptoms: ['fever', 'joint pain', 'chest pain', 'fatigue'],
    treatment: 'Antibiotics and anti-inflammatory medications. Consult a doctor.'
  },
  {
    illness: 'Celiac Disease',
    symptoms: ['diarrhea', 'bloating', 'fatigue', 'weight loss'],
    treatment: 'Gluten-free diet. Consult a healthcare provider.'
  }, 
  {
    illness: 'Irritable Bowel Syndrome (IBS)',
    symptoms: ['abdominal pain', 'bloating', 'gas', 'diarrhea'],
    treatment: 'Dietary changes and medications. Consult a doctor.'
  },
  {
    illness: 'Peptic Ulcer',
    symptoms: ['abdominal pain', 'nausea', 'bloating', 'indigestion'],
    treatment: 'Antacids and antibiotics if caused by H. pylori. Consult a doctor.'
  },
  {
    illness: 'Gout',
    symptoms: ['joint pain', 'swelling', 'redness', 'tenderness'],
    treatment: 'Pain relievers and dietary changes. Consult a doctor.'
  },
  {
    illness: 'Osteoarthritis',
    symptoms: ['joint pain', 'stiffness', 'swelling'],
    treatment: 'Pain relievers and physical therapy. Consult a doctor.'
  },
  {
    illness: 'Rheumatoid Arthritis',
    symptoms: ['joint pain', 'swelling', 'fatigue'],
    treatment: 'Disease-modifying antirheumatic drugs (DMARDs). Consult a doctor.'
  },
  {
    illness: 'Psoriasis',
    symptoms: ['red patches of skin', 'itching', 'scaling'],
    treatment: 'Topical treatments and phototherapy. Consult a dermatologist.'
  },
  {
    illness: 'Eczema',
    symptoms: ['itchy skin', 'red rash', 'dry skin'],
    treatment: 'Moisturizers and topical steroids. Consult a dermatologist.'
  },
  {
    illness: 'Cancer',
    symptoms: ['fatigue, weight loss, pain, and lumps.']
    treatment: 'Surgery, chemotherapy, radiation therapy, immunotherapy.'
  }
]);

console.log("✅ Seeding completed");
process.exit(); // Exit the script
