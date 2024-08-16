import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import UserRoutes from './routes/UserRoutes.js';
import PlaylistRoutes from './routes/PlaylistRoutes.js';
import SongsRoutes from './routes/SongsRoutes.js';
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Use the correct route path
app.use('/api/users', UserRoutes);
app.use('/api/playlist', PlaylistRoutes);
app.use('/api/song', SongsRoutes);
mongoose.connect("mongodb+srv://harsh:harsh@cluster0.1kx44.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Connected to MongoDB");
})
.catch((error) => {
  console.error("Error connecting to MongoDB:", error.message);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
