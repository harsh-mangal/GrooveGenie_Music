import express from 'express';
import mongoose, { mongo } from 'mongoose';

const app = express();
const PORT = 3000;
mongoose.connect("mongodb+srv://harsh:harsh@cluster0.1kx44.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("Connected to MongoDB");
})
app.listen(PORT , ()=>{
    console.log(`Server is running on port ${PORT}`);
});