import React from "react";
import 'admin-lte/dist/css/adminlte.css';
import 'admin-lte/dist/css/adminlte.min.css';
import './css/styles.css';
import Informasi from '@mui/icons-material/LocalLibrary';
import Aspirasi from '@mui/icons-material/OnlinePrediction';
import Komunikasi from '@mui/icons-material/ConnectWithoutContact';
import Kolaborasi from '@mui/icons-material/Groups';
import Instagram from '@mui/icons-material/Instagram';
import GitHub from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import background from "./css/Background.png";
import NavBar from './Navbar.jsx';

function Home() {
  
  return (
        <div>
          <NavBar/>
          <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block"
                style={{
                  width:'100%',
                  height:'100vh',
                  minWidth: 320,
                  maxWidth: 1920,
                  minHeight: 480,
                  maxHeight: 1080,
                }}
              src={background}
              alt="First slide"
            />
            <Carousel.Caption>
                <div style={{marginBottom:'10%'}}>
                    <h1 className="display-1 lh-1 mb-3 text-center">Selamat Datang di Konteks</h1>
                    <p className="lead fw-lighter text-light mb-5">Sebuah website bagi pemuda untuk mengaspirasi dan menginspirasi.</p>
                    <div class="align-items-center">
                        <a href="/Login" class="btn btn-primary" style={{marginRight: 7}}>Masuk</a>
                        <a href="/Daftar" class="btn btn-primary">Daftar</a>
                    </div>
                </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block"
              src={background}
              alt="Second slide"
              style={{
                width:'100%',
                height:'100vh',
                minWidth: 320,
                maxWidth: 1920,
                minHeight: 480,
                maxHeight: 1080,
              }}
            />

            <Carousel.Caption>
                <div style={{marginBottom:'10%'}}>
                    <h1 className="display-1 lh-1 mb-3 text-center">Apa Kabarmu Hari Ini</h1>
                    <p className="lead fw-lighter text-light mb-5">Apakah ada kabar menarik hari ini?.</p>
                    <div class="align-items-center">
                        <a href="/Login" class="btn btn-primary" style={{marginRight: 7}}>Masuk</a>
                        <a href="/Daftar" class="btn btn-primary">Daftar</a>
                    </div>
                </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block"
              src={background}
              alt="Third slide"
              style={{
                width:'100%',
                height:'100vh',
                minWidth: 320,
                maxWidth: 1920,
                minHeight: 480,
                maxHeight: 1080,
              }}
            />

            <Carousel.Caption>
                <div style={{marginBottom:'10%'}}>
                    <h1 className="display-1 lh-1 mb-3 text-center">Mari Berdiskusi Bersama Kami</h1>
                    <p className="lead fw-lighter text-light mb-5">Mari menambah wawasan dengan berdiskusi bersama.</p>
                    <div class="align-items-center">
                        <a href="Masuk.html" class="btn btn-primary" style={{marginRight: 7}}>Masuk</a>
                        <a href="./Registrasi.jsx" class="btn btn-primary">Daftar</a>
                    </div>
                </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      
        <Container style={{marginTop:50}} id='Layanan'>
          <div className="text-center">
            <h2 className="section-heading text-uppercase" style={{marginBottom:50}}>Layanan</h2>
          </div>

          <div class="row text-center">
              <div class="col-md-3">
                  <Informasi className="brand-image img-circle elevation-3" style={{ fontSize: 128 }}>  </Informasi>
                  <h4 class="my-3">Informasi</h4>
                  <p class="text-muted"> Menyediakan berita dan informasi yang valid dan terbaru.</p>
              </div>
              <div class="col-md-3">
                  <Aspirasi className="brand-image img-circle elevation-3" style={{ fontSize: 128 }}></Aspirasi>
                  <h4 class="my-3">Aspirasi</h4>
                  <p class="text-muted"> Mengaspirasikan ide dan gagasan melalui campaign.</p>
              </div>
              <div class="col-md-3">
                  <Komunikasi className="brand-image img-circle elevation-3" style={{ fontSize: 128 }}></Komunikasi>
                  <h4 class="my-3">Komunikasi</h4>
                  <p class="text-muted"> Menyediakan ruang diskusi untuk berbagi informasi terhadap suatu isu.</p>
              </div>
              <div class="col-md-3">
                <Kolaborasi className="brand-image img-circle elevation-3" style={{ fontSize: 128 }}></Kolaborasi>
                <h4 class="my-3">Kolaborasi</h4>
                <p class="text-muted">Memberikan ruang untuk berkolaborasi untuk menghasilkan suatu karya.</p>
            </div>
          </div>
        </Container>
        <footer class="footer text-center" style={{marginTop:50}} id='Footer'>
          <div class="container">
              <div class="row">
                  <div class="col-lg-6 mb-4 mb-lg-0">
                      <h4 id="TentangID" class="text-uppercase mb-4">Tentang</h4>
                      <p class="lead mb-0">
                          Konteks sebuah portal berita yang menyajikan informasi dan menjadi wadah aspirasi dan kolaborasi bagi para pemuda.
                      </p>
                  </div>
                  <div class="col-lg-6 mb-4 mb-lg-0">
                      <h4 id="Kontak" class="text-uppercase mb-4">Kontak</h4>
                      <a class="btn text-light btn-social mx-1" href="https://github.com/Fajar7574" target="_blank"><GitHub style={{ fontSize: 32 }}/></a>
                      <a class="btn text-light btn-social mx-1" href="https://www.linkedin.com/in/fajar-ridwan-sidik/" target="_blank"><LinkedIn style={{ fontSize: 32 }}/></a>
                      <a class="btn text-light btn-social mx-1" href="https://www.instagram.com/16017337.fajar.ridwan/" target="_blank"><Instagram style={{ fontSize: 32 }}/></a>
                  </div>
              </div>
          </div>
        </footer>
        </div>
        
  );
}

export default Home;
