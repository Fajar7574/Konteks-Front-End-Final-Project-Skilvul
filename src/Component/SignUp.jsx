
import React from "react";
import './css/styles.css';
import { Form,Button,Container,Card,Row } from 'react-bootstrap';
import Back from '@mui/icons-material/ArrowBack';
import { useState } from 'react';



function Daftar() {
    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();

    const handleSubmit= (e) => {
    
      e.preventDefault();
      const requestOptions = {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          { 
            name: name,
            password: password,
            email: email
          }
        )
      };
      fetch(process.env.REACT_APP_BACKEND +'/api/users/', requestOptions)
        .then(response => response.json())
        .then(data => {
          if(data.auth == true){
              localStorage.setItem("name", name); 
              localStorage.setItem("password", password); 
              localStorage.setItem("email", email); 
              window.location.href = "/Daftar/Pendaftaran-berhasil";
  
          }else{
            console.log("gagal daftar");
          }
        });
    }
  return (
        <Card className="background-image mb-0" >
        <Container style={{padding:0,margin:0}}><a href="/"><Back  type="button" className="txt-primary" style={{color:'white',fontSize:30,marginTop:50,marginLeft:30}}/> </a></Container>
          <Row className="justify-content-center align-self-center" style={{marginTop:'10vh'}}>
            <h1 className="text-light text-center">Daftar</h1>
            <Card style={{ textAlign:'left',width: '20rem'}}>
              <Card.Body>
                  <Form onSubmit={e => { handleSubmit(e) }}>
                      <Form.Group className="mb-1" controlId="formBasicName">
                          <Form.Label>Nama Lengkap</Form.Label>
                          <Form.Control type="name" placeholder="Masukan Nama Lengkap" onChange={e => setName(e.target.value)}/>
                      </Form.Group>

                      <Form.Group className="mb-1" controlId="formBasicE-mail" >
                          <Form.Label>E-mail</Form.Label>
                          <Form.Control type="email" placeholder="Masukan E-mail" onChange={e => setEmail(e.target.value)}/>
                      </Form.Group>

                      <Form.Group className="mb-1" controlId="formBasicPassword">
                          <Form.Label>Password</Form.Label>
                          <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                      </Form.Group>
                      <Form.Group className="mb-4" controlId="formBasicCheckbox">
                          <Form.Check type="checkbox" label="Ingat Saya" />
                      </Form.Group>
                      <Button variant="primary" type="submit">
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
