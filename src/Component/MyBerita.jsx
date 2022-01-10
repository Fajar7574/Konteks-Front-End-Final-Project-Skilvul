import React from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Component,Body, Navbar, Nav, NavDropdown,Form,FormControl,Button,Container,Card,Row,InputGroup,Table} from 'react-bootstrap';
import 'react-pro-sidebar/dist/css/styles.css';
import User from "@mui/icons-material/AccountCircle";
import Back from '@mui/icons-material/ArrowBack';
import ForumIcon from '@mui/icons-material/Forum';
import AddCommentIcon from '@mui/icons-material/AddComment';
import Carousel from 'react-bootstrap/Carousel';
import background from "./css/Background.png";
import Logo from "./assets/img/KonteksLogo.png";
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
        <Row>
       
            <Profil/>
       
            <div class="col-10 ">
            <Container style={{marginTop:'25vh'}}>
            <Row >
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                </tr>
                <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
                </tr>
            </tbody>
            </Table>
            </Row>
            </Container>

            </div> 

        </Row>

               
        
    );
}

export default Beritaku;
