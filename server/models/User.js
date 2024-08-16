import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: { type: "string", required: true},
    email: { type: "string", required: true},
    password: { type: "string", required: true},
    isAdmin: { type: "boolean", default: false},
    playlists: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Playlist' }]
});

const User  =  mongoose.model("User" , UserSchema);
export default User;