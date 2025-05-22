import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { connectDB } from "./db/connectDb.js";
import authRoutes from './routes/authRoute.js';
import diagnoseRoute from './routes/diagnoseRoute.js';
import { requireAuth,checkUser } from './middleware/authMiddleware.js';
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

//view engine
app.set('view engine', 'ejs');
//setup static folder
app.use(express.static('public'));

app.use("/",authRoutes);
app.use("/",diagnoseRoute);
app.get('*',checkUser);

app.use((req, res) => {
  res.status(404).render('nopage');
});


app.listen(port,()=>{
    connectDB();
    console.log(`server is running on port ${port}`);
});


