import React from "react";
import { Nav,FormControl,Button,Container,Card,Row,InputGroup} from 'react-bootstrap';
import 'react-pro-sidebar/dist/css/styles.css';
import Carousel from 'react-bootstrap/Carousel';
import background from "./css/Background.png";
import Logo from "./assets/img/KonteksLogo.png";
import Profil from "./MyProfil.jsx";
import { useState } from 'react';
import { useParams } from 'react-router-dom';

function GroupChat() {
    let {campaign_id}  = useParams();
    const [textMessage, sendMessage] = useState();
    const [Message, setDataMessage] = React.useState(null);
    const [Campaign, setDataCampaign] = React.useState(null);
    const requestOptions = {
        method: 'GET',
        headers: { 
          'Content-Type': 'application/json',
          Authorization : localStorage.getItem('token')
        }
      };
    React.useEffect(() => {
        fetch("http://localhost:5000/api/campaignsusermessage/"+campaign_id,requestOptions
        )
        .then((res) => res.json())
        .then((Message) => setDataMessage(Message))
        .then(data => {
                localStorage.setItem("campaign_id",campaign_id);
          });
    }, []); 

    React.useEffect(() => {
        fetch("http://localhost:5000/api/campaignsnews/"+campaign_id,requestOptions
        )
        .then((res) => res.json())
        .then((Message) => setDataCampaign(Message));
    }, []); 
    
    var dataMessage = !Message ? <p>Loading</p> :   
    Message.map((datas, index) => (
        <Card>
            <Card.Header>
                <img src={Logo} className="brand-image img-circle" width="30" height="30"/>
                    <strong className="me-auto"> {datas.campaignusercomment.user.name}</strong>
                    <small> 11 mins ago</small>
            </Card.Header>
            <Card.Body>
                <p>
                    {datas.message}
                </p>
            </Card.Body>
         </Card>
    ));

    const requestOptions2 = {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          Authorization : localStorage.getItem('token')
        },
        body: JSON.stringify(
          { 
            user_id: localStorage.getItem("user_id"),
            campaign_id: campaign_id,
            message : textMessage
          }
        )
      };
    const handleKirim= (e) => {

        fetch('http://localhost:5000/api/campaignsusermessage', requestOptions2)
        .then(response => response.json())
        .then(data => {
            window.location.reload();
        });
        
      }
   
     
      
     var dataCampaign = !Campaign ? <p>Loading</p> :  
     <Carousel.Item>
           <img
           className="d-block"
               style={{
               width:'100%',
               maxWidth: 1920,
               maxHeight: 240,
               }}
           src={background}
           alt={Campaign.code}
           />
           
           <Carousel.Caption>
           <a href="" class="txt-primary text-decoration-none"><h2 class="mb-2">
                                       {Campaign.code}
           </h2></a> 
           </Carousel.Caption>
       </Carousel.Item>      
      ;
    
    return (
        <Row bg="dark" style={{width:'100%'}}>
       
            <Profil/>
            <div class="col-md-1 "></div>
            <div class="col-md-8 ">
            <Container>
            <Row style={{marginLeft:40}}>
                <Card>
                    <Card.Body>
                        <Card className="text-center">
                        <Card.Header><h2>Campaign</h2></Card.Header>
                        <Card.Body style={{padding:0}}>
                        <Carousel >
                        {dataCampaign}
                        </Carousel>
                        </Card.Body>
                        <Card.Footer className="text-muted">
                        <Nav fill variant="tabs" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link href={"/Campaign/Group-Chat/Chat/"+localStorage.getItem("campaign_id")}><h5 className="txt-primary-2 text-center">Diskusi</h5></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href={"/Campaign/Group-Chat/Berita/"+localStorage.getItem("campaign_id")}><h5 className="txt-primary-2 text-center">Berita Terkait</h5></Nav.Link>
                        </Nav.Item>
                        </Nav>
                        </Card.Footer>
                        </Card>
                        {dataMessage}
                        <InputGroup>
                            <FormControl as="textarea" aria-label="With textarea" onChange={e => sendMessage(e.target.value)} />
                            <Button onClick={e => { handleKirim(e) }}><a href="" type="submit">Kirim</a></Button>
                        </InputGroup>
                           
                    </Card.Body>
                    <Card.Body>
                    
                    </Card.Body>
                    
                </Card>
            </Row>
            </Container>

            </div> 
            <div class="col-md-1 "></div>
        </Row>

               
        
    );
}

export default GroupChat;
