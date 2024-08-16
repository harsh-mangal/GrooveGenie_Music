import mongoose from "mongoose";

const UserSchema = new Schema({
    name: { type: "string", required: true},
    email: { type: "string", required: true},
    password: { type: "string", required: true},
    isAdmin: { type: "boolean", default: false},
});

const User  =  mongoose.model("User" , UserSchema);
export default User;