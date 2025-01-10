import mongoose from 'mongoose';
// import jwt from 'jsonwebtoken;

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: [true, "First name not provided"],
        maxlength: 30,
        minlength: 3
    },
    last_name: {
        type: String,
        default: "",
        maxlength: 30,
    },
    email: {
        type: String,
        required: [true, "Email not provided"],
        match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Please provide a valid email',
        ],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Password not proided"],
        minlength: 6
    },
    headline: {
        type: String,
        default: "",
        maxlength: 60
    },
    biography: {
        type: String,
        default: "",
    },
    linkedIn: {
        type: String,
        default: "",
    }, 
    youtube: {
        type: String,
        default: "",
    }

})

export default mongoose.model('User', userSchema);







