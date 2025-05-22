import { User } from '../models/User.js'
import jwt from "jsonwebtoken";

//handle errors
const handleErrors = (err) => {
    let errors = { name:'',age:'',phone:'',username: '',password: ''};
    //duplicate error code
    if(err.code === 11000){
        errors.username = "The username is already Registered";
        return errors;
    }
    //validation errors
   if(err.message.includes('user validation failed')) {
      Object.values(err.errors).forEach(({properties}) => {
        errors[properties.path] = properties.message;
      });
   }
   return errors;
}

//handle logins error
const handleLoginErrors = (err) => {
   let errors = { username: '', password: '' };

  if (err.message === 'Incorrect Username') {
    errors.username = 'That username is not registered';
  }

  if (err.message === 'Incorrect Password') {
    errors.password = 'That password is incorrect';
  }
  return errors;
}

const maxAge = 4*24*60*60;
const createToken = (id) =>{
    return jwt.sign({id}, 'diagnosis0101',{
        expiresIn: maxAge
    })
}

export const signUpget = async (req,res) =>{
  res.render('signup.ejs');
}
export const loginGet = async (req,res) =>{
  res.render('login.ejs');
}

export const dashboard = (req,res)=>{
    res.render('patient_dashboard.ejs');
}


export const signup = async (req,res)=>{
const {name,age,gender,phone,username,password,confPwd} = req.body;
 try{
    const user = await User.create({name,age,gender,phone,username,password });
        const token = createToken(user._id);
        res.cookie('jwt', token,{httpOnly: true,maxAge: maxAge*1000});
     res.status(201).json({user: user._id});
 }
 catch(error){
    const errors = handleErrors(error);
    res.status(400).json({errors});
 }
}
export const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.login(username, password);
    const token = createToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ user: user._id });
  } catch (err) {
    const errors = handleLoginErrors(err);
    res.status(400).json({ errors }); // <- send { errors } not { error }
  }
};


export const logout = async (req,res)=>{
    res.cookie('jwt','',{maxAge: 1});
    res.redirect('/diagnose');
}