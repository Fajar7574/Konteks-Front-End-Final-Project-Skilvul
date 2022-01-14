import './App.css';
import Berita from './Component/News.jsx';
import Daftar from './Component/SignUp.jsx';
import Home from './Component/Home.jsx';
import ListBerita from './Component/ListNews.jsx';
import Campaign from './Component/ListCampaign.jsx';
import Login from './Component/Login.jsx';
import Lupa from './Component/ForgetPassword.jsx';
import Berhasil from './Component/SignUpSuccess.jsx';
import Terkirim from './Component/SendPassword.jsx';
import Tentang from './Component/About.jsx';
import Kontak from './Component/Contact.jsx';
import GroupChat from './Component/CampaignChat.jsx';
import GroupBerita from './Component/CampaignNews.jsx';
import BuatBerita from './Component/MakeNews.jsx';
import BuatCampaign from './Component/MakeCampaign.jsx';
import NotFound from './Component/Error.jsx';
import ProfilHome from './Component/ProfilHome.jsx';
import NoAkses from './Component/noAkses.jsx';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/Kontak" element={<Kontak/>} />
        <Route path="/Tentang" element={<Tentang/>} />
        <Route path="/Berita" element={<Berita/>} />
        <Route path="/Campaign" element={<Campaign/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Daftar" element={<Daftar/>} />
        <Route path="/Akses-ditolak" element={<NoAkses/>} />
        <Route path="/Berita/List-all-berita" element={<ListBerita/>} />
        <Route path="/Login/Lupa-password" element={<Lupa/>} />
        <Route path="/Daftar/Pendaftaran-berhasil" element={<Berhasil/>} />
        <Route path="/Campaign/Group-Chat/Chat/:campaign_id" element={<GroupChat/>} />
        <Route path="/Campaign/Group-Chat" element={<ProfilHome/>} />
        <Route path="/Login/Lupa-password/Terkirim" element={<Terkirim/>} />
        <Route path="/Campaign/Group-Chat/Buat-Berita" element={<BuatBerita/>} />
        <Route path="/Campaign/Group-Chat/Buat-Campaign" element={<BuatCampaign/>} />
        <Route path="/Campaign/Group-Chat/Berita/:campaign_id" element={<GroupBerita/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  );
}

export default App;
