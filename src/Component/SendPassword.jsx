
import React from "react";
import './css/styles.css';
import { Component,Body, Navbar, Nav, NavDropdown,Form,FormControl,Button,Container,Card,Row } from 'react-bootstrap';
import Back from '@mui/icons-material/ArrowBack';
import { useState } from 'react';

function Terkirim() {
  const handleLogout= (e) => {
    
    e.preventDefault();
    localStorage.setItem("name", ""); 
    localStorage.setItem("token", ""); 
    window.location.href = "/";
    
  }
  const handleLogout2= (e) => {
    
    e.preventDefault();
    localStorage.setItem("name", ""); 
    localStorage.setItem("token", ""); 
    window.location.href = "/Login";
    
  }
  return (
    <Card className="background-image mb-0" >
      <Container style={{padding:0,margin:0}}><a onClick={e => { handleLogout(e) }}><Back  type="button" className="txt-primary" style={{color:'white',fontSize:30,marginTop:50,marginLeft:30}}/> </a></Container>
      <Row className="justify-content-center align-self-center p-0" style={{marginTop:'10vh'}}>
        <h1 className="text-light text-center">Password</h1>
        <Card style={{ textAlign:'Center',width: '30rem', padding:0}}>
            <Card.Header >Konfirmasi Password</Card.Header>
              <Card.Body >
                <h5 style={{textAlign:'center'}}>Username</h5>
                <Card.Text>
                  {localStorage.getItem("name")}
                </Card.Text>
                <h5 style={{textAlign:'center'}}>Password</h5>
                <Card.Text>
                  {localStorage.getItem("password")}
                </Card.Text>
                <Button onClick={e => { handleLogout2(e) }} variant="primary">Masuk</Button>
              </Card.Body>
            <Card.Footer className="text-muted">terima kasih</Card.Footer>
          </Card>
        </Row>
    </Card>
  );
}

export default Terkirim;
