
import React from "react";
import './css/styles.css';
import { Component,Body, Navbar, Nav, NavDropdown,Form,FormControl,Button,Container,Card,Row } from 'react-bootstrap';
import Back from '@mui/icons-material/ArrowBack';

function Lupa() {
  return (
    <Card className="background-image mb-0" >
      <Container style={{padding:0,margin:0}}><a href="http://localhost:3000/Login"><Back  type="button" className="txt-primary" style={{color:'white',fontSize:30,marginTop:50,marginLeft:30}}/> </a></Container>
      <Row className="justify-content-center align-self-center" style={{marginTop:'25vh'}}>
        <h1 className="text-light text-center">Lupa Password</h1>
        <Card style={{ textAlign:'left',width: '20rem'}}>
              <Card.Body>
                  <Form>
                  <Form.Group className="mb-1" controlId="formBasicName">
                      <Form.Label>Nama</Form.Label>
                      <Form.Control type="name" placeholder="Nama Lengkap" />
                  </Form.Group>

                  <Form.Group style={{marginBottom:20}} controlId="formBasicEmail">
                      <Form.Label>E-mail</Form.Label>
                      <Form.Control type="Email" placeholder="Masukan E-mail" />
                  </Form.Group>
                  <Button href="http://localhost:3000/Login" variant="" style={{ marginRight:10 }} type="submit">
                      Masuk
                  </Button>
                  <Button href="http://localhost:3000/Login/Lupa-password/Terkirim"variant="primary" >
                      Kirim
                  </Button>
                  <br/>
                  <a href="" class="text-white:hover text-decoration-none"><p class="mb-0 font-weight-600" style={{ fontSize: 12, marginTop:5}}>
                  lupa password
                  </p></a>
                  </Form>
              </Card.Body>
          </Card>
        </Row>
    </Card>
  );
}

export default Lupa;
