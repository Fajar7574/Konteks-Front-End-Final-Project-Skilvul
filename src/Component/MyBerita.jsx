import React from "react";
import { Container,Card,Row,Table,Button} from 'react-bootstrap';
import 'react-pro-sidebar/dist/css/styles.css';
import Profil from "./MyProfil.jsx"


import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";

function Beritaku() {
    const [index, setIndex] = React.useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    
    return (
        <Row style={{width:'100%'}}>
       
            <Profil/>
            <div class="col-md-1 "></div>
       
            <div class="col-md-8 ">
            <Container style={{marginTop:'15vh'}}>
            <Row >
            <Card style={{marginLeft:40}}>
            <Card.Title><h1 className="text-center">Beritaku</h1></Card.Title>
            <Card.Body>
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>No</th>
                <th>Judul Campaign</th>
                <th>Link Berita</th>
                <th>Edit</th>
                <th>Hapus</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td><Button>-</Button></td>
                <td><Button>-</Button></td>
                </tr>
            </tbody>
            </Table>
            </Card.Body>
            </Card>
            </Row>
            </Container>

            </div> 
            <div class="col-md-1 "></div>
        </Row>

               
        
    );
}

export default Beritaku;
