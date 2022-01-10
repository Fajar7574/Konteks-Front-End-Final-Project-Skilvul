import logo from './logo.svg';
import './App.css';
import Berita from './Component/Berita.jsx';
import Daftar from './Component/Daftar.jsx';
import Home from './Component/Home.jsx';
import ListBerita from './Component/ListAllBerita.jsx';
import Campaign from './Component/ListAllCampaign.jsx';
import Login from './Component/Login.jsx';
import Lupa from './Component/LupaPassword.jsx';
import Berhasil from './Component/PendaftaranBerhasil.jsx';
import Terkirim from './Component/TerikirimPasswordUlang.jsx';
import Tentang from './Component/Tentang.jsx';
import Kontak from './Component/Kontak.jsx';
import Groupchat from './Component/GroupChat.jsx';
import NotFound from './Component/Error.jsx';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/Kontak" element={<Kontak/>} />
        <Route path="/Tentang" element={<Tentang/>} />
        <Route path="/Berita" element={<Berita/>} />
        <Route path="/Campaign" element={<Campaign/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Daftar" element={<Daftar/>} />
        <Route path="/Berita/List-all-berita" element={<ListBerita/>} />
        <Route path="/Login/Lupa-password" element={<Lupa/>} />
        <Route path="/Daftar/Pendaftaran-berhasil" element={<Berhasil/>} />
        <Route path="/Login/Lupa-password/Terkirim" element={<Terkirim/>} />
        <Route path="/Campaign/group-chat" element={<Groupchat/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
