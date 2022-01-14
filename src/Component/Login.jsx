
import React from "react";
import './css/styles.css';
import { Form,Button,Container,Card,Row } from 'react-bootstrap';
import Back from '@mui/icons-material/ArrowBack';
import { useState } from 'react';

function Login() {

  const [name, setName] = useState();
  const [password, setPassword] = useState();


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
          password: password
        }
      )
    };
    fetch( process.env.REACT_APP_BACKEND +'/api/users/signin', requestOptions)
      .then(response => response.json())
      .then(data => {
        if(data.auth == true){
            localStorage.setItem("user_id",data.id);
            localStorage.setItem("name", name); 
            localStorage.setItem("token", data.accessToken); 
            window.location.href = "/";

        }else{
          console.log("gagal login");
          alert("Username/Password salah atau silahkan daftar terlebih dahulu")
        }
      });
  }

return (

    <div>
    <Card className="background-image mb-0" >
    <Container style={{padding:0,margin:0}}><a href="/"><Back  type="button" className="txt-primary" style={{color:'white',fontSize:30,marginTop:50,marginLeft:30}}/> </a></Container>
      <Row className="justify-content-center align-self-center" style={{marginTop:'10vh'}}>
      
        <h1 className="text-light text-center">Masuk</h1>
        <Card style={{ textAlign:'left',width: '20rem'}}>
            <Card.Body>
            <Form onSubmit={e => { handleSubmit(e) }}>

                  <Form.Group className="mb-1" controlId="formBasicName">
                      <Form.Label>Nama Lengkap</Form.Label>
                      <Form.Control type="name" placeholder="Masukan Nama Lengkap" onChange={e => setName(e.target.value)}  />
                  </Form.Group>

                  <Form.Group className="mb-1" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control name="Password"  type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Ingat Saya" />
                  </Form.Group>
                  <Button  variant="primary" style={{ marginRight:10 }} type="submit">
                      Masuk
                  </Button>
                  <Button  href="/Daftar"variant="light" >
                      Daftar
                  </Button>
                 
                  <br/>
                  <a href="/Login/Lupa-password" class="text-white:hover text-decoration-none"><p class="mb-0 font-weight-600" style={{ fontSize: 12}}>
                  lupa password
                  </p></a>
                </Form>
            </Card.Body>
        </Card>
      </Row>
    </Card>
    </div>
  );
}

export default Login;
