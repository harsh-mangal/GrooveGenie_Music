import express from 'express';
import Playlist from '../models/Playlist.js';

const router = express.Router();

// Route to create a new playlist
router.post('/CreatePlaylist', async (req, res) => {
  try {
    const playlist = new Playlist(req.body);
    await playlist.save();
    res.status(201).json(playlist);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
router.get('/playlists', async (req, res) => {
    try {
      const playlists = await Playlist.find().populate('songs'); // Populate songs with details
      res.status(200).json(playlists);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  router.get('/playlists/:id', async (req, res) => {
    try {
      const playlist = await Playlist.findById(req.params.id).populate('songs'); // Populate songs with details
      if (!playlist) return res.status(404).json({ message: 'Playlist not found' });
      res.status(200).json(playlist);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  router.put('/playlists/:id', async (req, res) => {
    try {
      const playlist = await Playlist.findByIdAndUpdate(req.params.id, req.body, {
        new: true, // Return the updated document
        runValidators: true, // Validate the update operation
      }).populate('songs'); // Populate songs with details
      if (!playlist) return res.status(404).json({ message: 'Playlist not found' });
      res.status(200).json(playlist);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  router.delete('/playlists/:id', async (req, res) => {
    try {
      const playlist = await Playlist.findByIdAndDelete(req.params.id);
      if (!playlist) return res.status(404).json({ message: 'Playlist not found' });
      res.status(200).json({ message: 'Playlist deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
        
export default router;
