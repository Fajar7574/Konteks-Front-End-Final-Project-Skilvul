
import React from "react";
import './css/styles.css';
import { Component,Body, Navbar, Nav, NavDropdown,Form,FormControl,Button,Container,Card,Row } from 'react-bootstrap';

function NotFound() {
  return (
    <Card className="background-image mb-0" >
      <Row className="justify-content-center align-self-center p-0" style={{marginTop:'25vh'}}>
        <h1 className="text-light text-center">Not Found</h1>
        <Card style={{ textAlign:'Center',width: '30rem', padding:0}}>
            <Card.Header >URL Salah</Card.Header>
              <Card.Body >
                <h1 style={{textAlign:'center'}}>Silahkankan Cek Kembali</h1>
                <Card.Text>
                  Silahkan kembali ke menu utama untuk mengakses fitur yang tersedia.
                </Card.Text>
                <Button href="http://localhost:3000/"variant="primary">Masuk</Button>
              </Card.Body>
            <Card.Footer className="text-muted">terima kasih</Card.Footer>
          </Card>
        </Row>
    </Card>
  );
}

export default NotFound;
