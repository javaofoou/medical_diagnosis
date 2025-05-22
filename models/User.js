import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is Required"],
        min: 0,
        trim: true,
    },
    age: {
        type: Number,
        required: true,
        min: [0, "Age cannot be negative"],
        max: [120, "Unrealistic Age"]
         },
    gender: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        match: [/^[0-9]{10,15}$/, "Invalid Phone Number"]
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minlength: [6, "Password must be at least 6 Characters"]
    },
},{timestamps: true});
//created at field will be automatically added to the document

//Hash before password saving
userSchema.pre('save', async function(next){
    if(!this.isModified('password'))
        return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

//static method to login user
userSchema.statics.login = async function(username, password) {
    const user = await this.findOne({ username: username.toLowerCase() });

    if (!user) {
        throw Error('Incorrect Username');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw Error('Incorrect Password');
    }
    return user;
}

export const User = mongoose.model("user",userSchema);