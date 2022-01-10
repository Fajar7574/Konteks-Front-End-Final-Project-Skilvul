
import React from "react";
import './css/styles.css';
import { Component,Body, Navbar, Nav, NavDropdown,Form,FormControl,Button,Container,Card,Row } from 'react-bootstrap';
import background from "./css/Background.png";
import Back from '@mui/icons-material/ArrowBack';

function Login() {

  // const [Berita, setDataBerita] = React.useState(null);
  
  // handleChange = this.handleChange.bind(this);
  // handleChange = (event) => {
  // console.log('this is:', event.target.value);
  // }
  // function handleChange(e){

  // }
  // //POST (Insert Data)
  // function UpdateData(e) {
  //   e.preventDefault();
    // console.log("Username : "+ userName.value);
    // console.log("Password : "+ Password.value);
    // const requestOptions = {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(
    //     { 
    //       title: 'Fajar',
    //       content: "test New",
    //       hyperlink: "false"
    //     }
    //   )
    // };
    // fetch('http://localhost:5000/api/users/signin', requestOptions)
    //   .then(response => response.json())
    //   .then(data => "balasan : "+console.log(data));

  //}
  // handleClick = () => {
  //   console.log('this is:', this);
  // }
  return (
    <div>
    <Card className="background-image mb-0" >
    <Container style={{padding:0,margin:0}}><a href="http://localhost:3000/"><Back  type="button" className="txt-primary" style={{color:'white',fontSize:30,marginTop:50,marginLeft:30}}/> </a></Container>
      <Row className="justify-content-center align-self-center" style={{marginTop:'25vh'}}>
      
        <h1 className="text-light text-center">Masuk</h1>
        <Card style={{ textAlign:'left',width: '20rem'}}>
            <Card.Body>
                <Form>
                  <Form.Group className="mb-1" controlId="formBasicName">
                      <Form.Label>Nama Lengkap</Form.Label>
                      <Form.Control name="userName"type="name" placeholder="Masukan Nama Lengkap" />
                  </Form.Group>

                  <Form.Group className="mb-1" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control name="Password"  type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Ingat Saya" />
                  </Form.Group>
                  <Button variant="primary" style={{ marginRight:10 }} type="submit">
                      Masuk
                  </Button>
                  <Button href="http://localhost:3000/Daftar"variant="light" >
                      Daftar
                  </Button>
                  <br/>
                  <a href="http://localhost:3000/Login/Lupa-password" class="text-white:hover text-decoration-none"><p class="mb-0 font-weight-600" style={{ fontSize: 12}}>
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
