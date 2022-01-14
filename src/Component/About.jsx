
import React from "react";
import './css/styles.css';
import {Button,Card,Row } from 'react-bootstrap';
import NavBar from './Navbar.jsx';

function Tentang() {
  return (
  <div>
    <NavBar/>
    <Card className="background-image mb-0" >
      <Row className="justify-content-center align-self-center p-0" style={{marginTop:'30vh'}}>
        <br/>
        <Card style={{ textAlign:'Center',width: '30rem', padding:0}}>
            <Card.Header ><h1>Konteks</h1></Card.Header>
              <Card.Body >
                <Card.Text>
                   Konteks sebuah portal berita yang menyajikan informasi dan menjadi wadah aspirasi dan kolaborasi bagi para pemuda.
                </Card.Text>
                <Button href="/"variant="primary">Home</Button>
              </Card.Body>
            <Card.Footer className="text-muted">terima kasih</Card.Footer>
          </Card>
        </Row>
    </Card>
  </div>
  );
}

export default Tentang;
