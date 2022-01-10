
import React from "react";
import './css/styles.css';
import { Component,Body, Navbar, Nav, NavDropdown,Form,FormControl,Button,Container,Card,Row } from 'react-bootstrap';
import Instagram from '@mui/icons-material/Instagram';
import GitHub from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';
import NavBar from './Navbar.jsx';

function Kontak() {
  return (
    <div>
    <NavBar/>
    <Card className="background-image mb-0" >
      <Row className="justify-content-center align-self-center p-0" style={{marginTop:'25vh'}}>
        <h1 className="text-light text-center">Kontak</h1>
        <Card style={{ textAlign:'Center',width: '30rem', padding:0}}>
            <Card.Header >Silahkan Hubungi Untuk Informasi Lanjut</Card.Header>
              <Card.Body >
                      <br/>
                      <a class="btn txt-primary mx-1" href="https://github.com/Fajar7574" target="_blank"><GitHub style={{ fontSize: 32 }}/></a>
                      <a class="btn txt-primary mx-1" href="https://www.linkedin.com/in/fajar-ridwan-sidik/" target="_blank"><LinkedIn style={{ fontSize: 32 }}/></a>
                      <a class="btn txt-primary mx-1" href="https://www.instagram.com/16017337.fajar.ridwan/" target="_blank"><Instagram style={{ fontSize: 32 }}/></a>
                      <br/>
                      <br/>
                      <Button href="http://localhost:3000/Login"variant="primary">Masuk</Button>
              </Card.Body>
            <Card.Footer className="text-muted">terima kasih</Card.Footer>
          </Card>
        </Row>
    </Card>
    </div>
  );
}

export default Kontak;
