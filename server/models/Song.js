import mongoose from 'mongoose';

const SongSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  album: {
    type: String,
  },
  genre: {
    type: String,
  },
  duration: {
    type: Number, // Duration in seconds
  },
  url: {
    type: String, // URL to the song file
    required: true,
  },
  coverImage: {
    type: String, // URL to the album cover image
  },
  releaseDate: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Song', SongSchema);
