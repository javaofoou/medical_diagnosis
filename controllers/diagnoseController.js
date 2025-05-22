// diagnose.js
import { Symptom } from "../models/Symptom.js";// import your file


export const diagnoseGet =  (req, res) => {
  res.render("diagnose", { result: null, noMatch: false });
}

export const aboutGet = (req,res) =>{
    res.render('about.ejs');
}
//faqGet
export const faqGet = (req,res) =>{
    res.render('faq.ejs');
}


// POST - handle form and show result
export const diagnosePost = async(req, res) => {
  const { age,gender,symptoms } = req.body;
  const inputSymptoms = symptoms.toLowerCase().split(",").map(s => s.trim());

  const rules = await Symptom.find();

  let matched = null;

  for (const rule of rules) {
    const ruleSymptoms = rule.symptoms.map(s => s.toLowerCase());
    const hasMatch = ruleSymptoms.some(sym => inputSymptoms.includes(sym));
    if (hasMatch) {
      matched = rule;
      break;
    }
  }
  if (matched) {
    res.render("diagnose", { result: matched, noMatch: false });
  } else {
    res.render("diagnose", { result: null, noMatch: true });
  }
}

export const diagnoseProtectedPost = async(req, res) => {
  const { age,gender,symptoms } = req.body;
  const inputSymptoms = symptoms.toLowerCase().split(",").map(s => s.trim());

  const rules = await Symptom.find();

  let matched = null;

  for (const rule of rules) {
    const ruleSymptoms = rule.symptoms.map(s => s.toLowerCase());
    const hasMatch = ruleSymptoms.some(sym => inputSymptoms.includes(sym));
    if (hasMatch) {
      matched = rule;
      break;
    }
  }
  if (matched) {
    res.render("protectdiagnose", { result: matched, noMatch: false });
  } else {
    res.render("protectdiagnose", { result: null, noMatch: true });
  }
}


