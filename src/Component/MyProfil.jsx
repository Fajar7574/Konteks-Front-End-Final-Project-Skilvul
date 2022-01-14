import React from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Nav, Navbar, Container} from 'react-bootstrap';
import 'react-pro-sidebar/dist/css/styles.css';
import User from "@mui/icons-material/AccountCircle";
import Back from '@mui/icons-material/ArrowBack';
import AddCommentIcon from '@mui/icons-material/AddComment';
import Logo from "./assets/img/KonteksLogo.png";



function Profil() {
    const [Campaign, setDataCampaign] = React.useState(null);
    const requestOptions = {
        method: 'GET',
        headers: { 
          'Content-Type': 'application/json',
          Authorization : localStorage.getItem('token')
        }
      };
    React.useEffect(() => {
        fetch("http://localhost:5000/api/usercampaigns/"+localStorage.getItem("user_id"),requestOptions
        )
        .then((res) => res.json())
        .then((Campaign) => setDataCampaign(Campaign));
    }, []); 
    var dataCampaign = !Campaign ? <p>Loading</p> :   
    Campaign.usercampaign.map((datas, index) => (
        <MenuItem><Nav.Link href={"/Campaign/Group-Chat/Chat/"+datas.id}></Nav.Link>{datas.code}</MenuItem>
    ));


    return (
            <div className="col-md-2" style={{padding:0, margin:0, Width:'100%', backgroundColor:'transparent'}}>
            
            <Navbar expand="lg"style={{padding:0, margin:0, Width:'100%',marginRight:0,backgroundColor:'transparent',border:'transparent'}}>
                    <Navbar.Toggle  style={{marginTop:10, marginLeft:15,marginBottom:20}} aria-controls="offcanvasNavbar" type="button" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <img src={Logo} className="brand-image img-circle" width="30" height="30"/>
                    </Navbar.Toggle>
            <Navbar.Collapse id="">
                        <ProSidebar style={{height:'100vh',width:'100%'}}>
                            <Container style={{padding:0,margin:0}}><a href="/Campaign"><Back  type="button" className="txt-primary" style={{color:'white',fontSize:30,marginTop:50,marginLeft:30}}/> </a></Container>
                             <Menu>
                                <MenuItem><Nav.Link href="/Campaign/Group-Chat"> <User/> {localStorage.getItem("name")} </Nav.Link></MenuItem>
                                <SubMenu title="Diskusi" style={{marginLeft:20}}>
                                    {dataCampaign}
                                </SubMenu>
                                <MenuItem ><Nav.Link href="/Campaign/Group-Chat/Buat-Campaign"><p><AddCommentIcon/> Buat Campaign</p></Nav.Link></MenuItem>
                             </Menu>
                        </ProSidebar>
            </Navbar.Collapse>
            </Navbar>
           
            </div>   
        
    );
}

export default Profil;
