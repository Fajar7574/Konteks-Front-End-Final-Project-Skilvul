import React from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Nav, Navbar, Container,Card} from 'react-bootstrap';
import 'react-pro-sidebar/dist/css/styles.css';
import User from "@mui/icons-material/AccountCircle";
import Back from '@mui/icons-material/ArrowBack';
import ForumIcon from '@mui/icons-material/Forum';
import AddCommentIcon from '@mui/icons-material/AddComment';
import Logo from "./assets/img/KonteksLogo.png";



function Profil() {
    const [index, setIndex] = React.useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    


    return (
            <div bg='black'className="col-md-2">
            
            <Navbar expand="lg"style={{padding:0, margin:0}}>
                    <Navbar.Toggle  style={{marginTop:10, marginLeft:15,marginBottom:20}} aria-controls="offcanvasNavbar" type="button" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <img src={Logo} className="brand-image img-circle" width="30" height="30"/>
                    </Navbar.Toggle>
            <Navbar.Collapse id="">
                        <ProSidebar style={{height:'100vh',width:'100%'}}>
                            <Container style={{padding:0,margin:0}}><a href="http://localhost:3000/Campaign"><Back  type="button" className="txt-primary" style={{color:'white',fontSize:30,marginTop:50,marginLeft:30}}/> </a></Container>
                             <Menu>
                                <MenuItem><User/> Username</MenuItem>
                                <SubMenu title="Diskusi">
                                    <MenuItem>Component 1</MenuItem>
                                    <MenuItem>Component 2</MenuItem>
                                </SubMenu>
                                <SubMenu title="Campaign">
                                    <MenuItem ><Nav.Link href="/Campaign/Group-Chat/Buat-Campaign"><p><AddCommentIcon/> Buat Campaign</p></Nav.Link></MenuItem>
                                    <MenuItem ><Nav.Link href="/Campaign/Group-Chat/Campaignku"><p><AddCommentIcon/> Campaignku</p></Nav.Link></MenuItem>
                                </SubMenu>
                                <SubMenu title="Berita">
                                    <MenuItem ><Nav.Link href="/Campaign/Group-Chat/Buat-Berita"><p><AddCommentIcon/> Buat Berita</p></Nav.Link></MenuItem>
                                    <MenuItem ><Nav.Link href="/Campaign/Group-Chat/Beritaku"><p><AddCommentIcon/> Beritaku</p></Nav.Link></MenuItem>
                                </SubMenu>
                             </Menu>
                        </ProSidebar>
            </Navbar.Collapse>
            </Navbar>
         
            </div>   
        
    );
}

export default Profil;
