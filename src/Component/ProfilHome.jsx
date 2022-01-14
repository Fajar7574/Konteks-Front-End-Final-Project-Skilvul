import React from "react";
import { Container,Card,Row} from 'react-bootstrap';
import 'react-pro-sidebar/dist/css/styles.css';
import Profil from "./MyProfil.jsx"
import { useState } from 'react';


function ProfilHome() {
    const [index, setIndex] = React.useState(0);
    alert("hai");
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    
    return (
        <Row className="background-image mb-0" style={{width:'100%'}}>
   
            <Profil/>
            <div class="col-md-1 "></div>
    
            <div class="col-md-8 ">
            <Container style={{marginTop:'40vh'}}>
            <Row >
            <Card >
            <Card.Title><h1 className="text-center">Selamat Datang {localStorage.getItem("name")}  </h1></Card.Title>
            </Card>
            </Row>
            </Container>

            </div> 
            <div class="col-md-1 "></div>
        </Row>

               
        
    );
}

export default ProfilHome;
