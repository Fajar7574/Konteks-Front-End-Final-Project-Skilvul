import React from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Component,Body, Navbar, Nav, NavDropdown,Form,FormControl,Button,Container,Card,Row } from 'react-bootstrap';
import 'react-pro-sidebar/dist/css/styles.css';
import User from "@mui/icons-material/AccountCircle";
import Back from '@mui/icons-material/ArrowBack';
import ForumIcon from '@mui/icons-material/Forum';
import AddCommentIcon from '@mui/icons-material/AddComment';
import Carousel from 'react-bootstrap/Carousel';
import background from "./css/Background.png";

function GroupChat() {
const [Berita, setDataBerita] = React.useState(null);
  console.log("tets");

  //GET (get Daata News)
  React.useEffect(() => {
    fetch("http://localhost:5000/api/news/",{
      method: 'GET'
    })
    .then((res) => res.json())
    .then((Berita) => setDataBerita(Berita));
  }, []);
  var dataBerita = !Berita ? <p>Loading</p> :        
    Berita.map((datas, index) => (  
      <Carousel.Item>
        <img
          className="d-block"
            style={{
              height:'100%',
              minWidth: 320,
              minHeight: 360,
            }}
          src={background}
          alt="First slide"
        />
        <Card.ImgOverlay>  
          <Card.Title className="row"><div class="col-md-12 mb-0 badge badge-danger fs-12 font-weight-bold mb-3">Berita terkini</div></Card.Title>
        </Card.ImgOverlay>
        
        <Carousel.Caption
        style={{textAlign:'left'}}
        >
            
              <a href="" class="txt-primary text-decoration-none"><h2 class="mb-2">
                {datas.title}
              </h2></a>
              <p class="mb-0">
                {datas.content}
              </p>
              <span class="mr-2">admin </span>{datas.s}
            
        </Carousel.Caption>
      </Carousel.Item>
     
    ));


    return (
        <div>
                <Card>
                    <Card.Body style={{padding:0}}>
                        <ProSidebar style={{height:'100vh',width:'100%'}}>
                            <Container style={{padding:0,margin:0}}><a href="http://localhost:3000/Campaign"><Back  type="button" className="txt-primary" style={{color:'white',fontSize:30,marginTop:50,marginLeft:30}}/> </a></Container>
                             <Menu iconShape="square">
                                <MenuItem icon={<User/>}>Username</MenuItem>
                                <MenuItem icon={<AddCommentIcon/>}>Buat campaign</MenuItem>
                                <MenuItem icon={<AddCommentIcon/>}>Buat berita</MenuItem>
                                <SubMenu icon={<ForumIcon/>} title="Campaignku">
                                    <MenuItem>Component 1</MenuItem>
                                    <MenuItem>Component 2</MenuItem>
                                </SubMenu>
                                <SubMenu icon={<ForumIcon/>} title="Semua Campaign">
                                <MenuItem>Component 1</MenuItem>
                                <MenuItem>Component 2</MenuItem>
                                </SubMenu>
                             </Menu>
                        </ProSidebar>
                    </Card.Body>
                </Card>
        </div>
    );
}

export default GroupChat;
