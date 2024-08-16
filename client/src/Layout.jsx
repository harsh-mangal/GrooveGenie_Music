import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Music from './pages/Music';
import Playlist from './pages/Playlist';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Search from './pages/Search';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

const Layout = () => {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/music" element={<Music />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default Layout;
