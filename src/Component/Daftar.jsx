
import React from "react";
import './css/styles.css';
import { Component,Body, Navbar, Nav, NavDropdown,Form,FormControl,Button,Container,Card,Row } from 'react-bootstrap';
import Back from '@mui/icons-material/ArrowBack';

function Daftar() {
  return (
        <Card className="background-image mb-0" >
        <Container style={{padding:0,margin:0}}><a href="http://localhost:3000/"><Back  type="button" className="txt-primary" style={{color:'white',fontSize:30,marginTop:50,marginLeft:30}}/> </a></Container>
          <Row className="justify-content-center align-self-center" style={{marginTop:'10vh'}}>
            <h1 className="text-light text-center">Daftar</h1>
            <Card style={{ textAlign:'left',width: '20rem'}}>
              <Card.Body>
                  <Form>
                      <Form.Group className="mb-1" controlId="formBasicName">
                          <Form.Label>Nama Lengkap</Form.Label>
                          <Form.Control type="name" placeholder="Masukan Nama Lengkap" />
                      </Form.Group>

                      <Form.Group className="mb-1" controlId="formBasicE-mail">
                          <Form.Label>E-mail</Form.Label>
                          <Form.Control type="E-mail" placeholder="Masukan E-mail" />
                      </Form.Group>

                      <Form.Group className="mb-1" controlId="formBasicPassword">
                          <Form.Label>Password</Form.Label>
                          <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
                      <Form.Group className="mb-4" controlId="formBasicCheckbox">
                          <Form.Check type="checkbox" label="Ingat Saya" />
                      </Form.Group>
                      <Button href="http://localhost:3000/Daftar/Pendaftaran-berhasil" variant="primary" >
                          Daftar
                      </Button>
                      <br/>
                  </Form>
              </Card.Body>
          </Card>
       </Row>
    </Card>
  );
}

export default Daftar;
