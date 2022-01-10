
import React from "react";
import './css/styles.css';
import { Component,Body, Navbar, Nav, NavDropdown,Form,FormControl,Button,Container,Card,Row } from 'react-bootstrap';
import Back from '@mui/icons-material/ArrowBack';

function Terkirim() {
  return (
    <Card className="background-image mb-0" >
      <Container style={{padding:0,margin:0}}><a href="http://localhost:3000/Login/Lupa-password"><Back  type="button" className="txt-primary" style={{color:'white',fontSize:30,marginTop:50,marginLeft:30}}/> </a></Container>
      <Row className="justify-content-center align-self-center p-0" style={{marginTop:'25vh'}}>
        <h1 className="text-light text-center">Password</h1>
        <Card style={{ textAlign:'Center',width: '30rem', padding:0}}>
            <Card.Header >Terkirim</Card.Header>
              <Card.Body >
                <h1 style={{textAlign:'center'}}>Konfirmasi Password Berhasil</h1>
                <Card.Text>
                  Silahkan cek email anda untuk mengecek password.
                </Card.Text>
                <Button href="http://localhost:3000/Login"variant="primary">Masuk</Button>
              </Card.Body>
            <Card.Footer className="text-muted">terima kasih</Card.Footer>
          </Card>
        </Row>
    </Card>
  );
}

export default Terkirim;
