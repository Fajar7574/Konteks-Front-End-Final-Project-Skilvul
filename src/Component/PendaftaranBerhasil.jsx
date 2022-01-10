
import React from "react";
import './css/styles.css';
import { Component,Body, Navbar, Nav, NavDropdown,Form,FormControl,Button,Container,Card,Row } from 'react-bootstrap';
import Back from '@mui/icons-material/ArrowBack';

function Berhasil() {
  return (
    <Card className="background-image mb-0" >
      <Container style={{padding:0,margin:0}}><a href="http://localhost:3000/Daftar"><Back  type="button" className="txt-primary" style={{color:'white',fontSize:30,marginTop:50,marginLeft:30}}/> </a></Container>
      <Row className="justify-content-center align-self-center p-0" style={{marginTop:'25vh'}}>
        <h1 className="text-light text-center">Daftar</h1>
        <Card style={{ textAlign:'Center',width: '30rem', padding:0}}>
            <Card.Header >berhasil</Card.Header>
              <Card.Body >
                <h1 style={{textAlign:'center'}}>Pendaftaran Berhasil</h1>
                <Card.Text>
                  Silahkan masuk untuk mengakses campaign.
                </Card.Text>
                <Button href="http://localhost:3000/Login"variant="primary">Masuk</Button>
              </Card.Body>
            <Card.Footer className="text-muted">terima kasih</Card.Footer>
          </Card>
        </Row>
    </Card>
  );
}

export default Berhasil;
