import React from "react";
import "classnames";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'admin-lte/dist/css/adminlte.css';
import 'admin-lte/dist/css/adminlte.min.css';
import './css/styles.css';
import { Navbar, Nav, NavDropdown,Form,FormControl,Button,Container } from 'react-bootstrap';
import Logo from "./assets/img/KonteksLogo.png";
import Search from "@material-ui/icons/Search";
import User from "@mui/icons-material/AccountCircle";
import { useState } from 'react';


function NavBar() {

  const [name, setName] = useState();
  const [password, setPassword] = useState();

  React.useEffect(() => {
    if (localStorage.getItem("name") === ""){
      setName(localStorage.getItem("name"));
    }else{
      setName(localStorage.getItem("pengguna baru"));
    }
  }, []);

  const handleLogout= (e) => {
    
    e.preventDefault();
    localStorage.setItem("name", ""); 
    localStorage.setItem("token", ""); 
    window.location.href = "http://localhost:3000/";
    
  }
  
    var dataUser = localStorage.getItem("name") === "" ? 
    <a>
      <User style={{ marginRight: 2}}></User>Pengguna Baru
    </a> 
    :   
    <a>
      <User style={{ marginRight: 2}}></User>{localStorage.getItem("name")}
    </a> 
    ; 
    var Logout = localStorage.getItem("name") === "" ? 
    <NavDropdown.Item></NavDropdown.Item>
    :   
    <NavDropdown.Item onClick={e => { handleLogout(e) }}>Keluar</NavDropdown.Item>
    ; 
    var dataProfil = localStorage.getItem("name") === "" ? 
    <NavDropdown.Item></NavDropdown.Item>
    :   
    <NavDropdown.Item href="http://localhost:3000/Campaign/Group-Chat">My profil</NavDropdown.Item>
    ; 

  return (
    <Navbar fixed='top' bg="light" expand="lg">
        <Container>
          <Navbar.Brand className="brand-text font-weight-light">
            <img src={Logo} className="brand-image img-circle elevation-3" style={{marginTop: -7, marginRight: 7,marginLeft: 20}} width="30" height="30"/>
            <span>  Konteks </span> 
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto text-bold">
              <Nav.Link href="http://localhost:3000/">Home</Nav.Link>
              <Nav.Link href="http://localhost:3000/Berita">Berita</Nav.Link>
              <Nav.Link href="http://localhost:3000/Campaign">Campaign</Nav.Link>
              <Nav.Link href="http://localhost:3000/Tentang">Tentang</Nav.Link>
              <Nav.Link href="http://localhost:3000/Kontak">Kontak</Nav.Link>
            </Nav>
              <Form className="form-inline ml-0 ml-md-3">
                <div className="input-group input-group-sm">
                  <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-0.5 basic-navbar-nav"
                  aria-label="Search"/>
                  <div class="input-group-append">
                    <Button className="btn btn-navbar" style={{ marginRight: 7}}><Search style={{ fontSize: 17 }}></Search></Button>
                  </div>
                </div>
              </Form>
                {dataUser}
                  <NavDropdown  user="user" id="basic-nav-dropdown"> 
                  <NavDropdown.Item href="http://localhost:3000/Login">Masuk</NavDropdown.Item>
                  <NavDropdown.Item href="http://localhost:3000/Daftar">Daftar</NavDropdown.Item>
                  {dataProfil}
                  {Logout}
                  </NavDropdown>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default NavBar;
