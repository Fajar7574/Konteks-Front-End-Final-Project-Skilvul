
import React from "react";
import './css/styles.css';
import { Form,Button,Container,Card,Row } from 'react-bootstrap';
import Back from '@mui/icons-material/ArrowBack';
import { useState } from 'react';

function Lupa() {

  const [name, setName] = useState();
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
            email: email
          }
        )
      };
      fetch(process.env.REACT_APP_BACKEND +'/api/users/forget', requestOptions)
        .then(response => response.json())
        .then(data => {
          if(data.auth == true){
              localStorage.setItem("name", name); 
              localStorage.setItem("email", email); 
              localStorage.setItem("token", data.accessToken); 
              window.location.href = "/Login/Lupa-password/Terkirim";

          }else{
            console.log("gagal login");
            alert("Username/email salah atau silahkan daftar terlebih dahulu")
          }
        });
    }
  return (
    <Card className="background-image mb-0" >
      <Container style={{padding:0,margin:0}}><a href="/Login"><Back  type="button" className="txt-primary" style={{color:'white',fontSize:30,marginTop:50,marginLeft:30}}/> </a></Container>
      <Row className="justify-content-center align-self-center" style={{marginTop:'10vh'}}>
        <h1 className="text-light text-center">Lupa Password</h1>
        <Card style={{ textAlign:'left',width: '20rem'}}>
              <Card.Body>
                  <Form onSubmit={e => { handleSubmit(e) }}>
                  <Form.Group className="mb-1" controlId="formBasicName">
                      <Form.Label>Nama</Form.Label>
                      <Form.Control type="name" placeholder="Nama Lengkap" onChange={e => setName(e.target.value)} />
                  </Form.Group>

                  <Form.Group style={{marginBottom:20}} controlId="formBasicEmail">
                      <Form.Label>E-mail</Form.Label>
                      <Form.Control type="email" placeholder="Masukan E-mail" onChange={e => setEmail(e.target.value)}/>
                  </Form.Group>
                  <Button href="/Login" variant="" style={{ marginRight:10 }}>
                      Masuk
                  </Button>
                  <Button variant="primary" type="submit" >
                      Kirim
                  </Button>
                  <br/>
                  </Form>
              </Card.Body>
          </Card>
        </Row>
    </Card>
  );
}

export default Lupa;
