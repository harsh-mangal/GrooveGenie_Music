import express from 'express';
import Song from '../models/Song.js';


const router = express.Router();

// Route to create a new song
router.post('/createSong', async (req, res) => {
  try {
    const song = new Song(req.body);
    await song.save();
    res.status(201).json(song);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
router.get('/songs', async (req, res) => {
    try {
      const songs = await Song.find();
      res.status(200).json(songs);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  router.get('/songs/:id', async (req, res) => {
    try {
      const song = await Song.findById(req.params.id);
      if (!song) return res.status(404).json({ message: 'Song not found' });
      res.status(200).json(song);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  router.put('/songs/:id', async (req, res) => {
    try {
      const song = await Song.findByIdAndUpdate(req.params.id, req.body, {
        new: true, // Return the updated document
        runValidators: true, // Validate the update operation
      });
      if (!song) return res.status(404).json({ message: 'Song not found' });
      res.status(200).json(song);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  router.delete('/songs/:id', async (req, res) => {
    try {
      const song = await Song.findByIdAndDelete(req.params.id);
      if (!song) return res.status(404).json({ message: 'Song not found' });
      res.status(200).json({ message: 'Song deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
        


export default router;
