import React from "react";
import { Nav, Container,Card,Row,Button} from 'react-bootstrap';
import 'react-pro-sidebar/dist/css/styles.css';
import Carousel from 'react-bootstrap/Carousel';
import background from "./css/Background.png";
import Logo from "./assets/img/KonteksLogo.png";
import Profil from "./MyProfil.jsx";
import { useParams } from 'react-router-dom';

function GroupBerita() {
   let {campaign_id}  = useParams();
   const [Campaign, setDataCampaign] = React.useState(null);
   console.log("tets");
   const requestOptions = {
    method: 'GET',
    headers: { 
      'Content-Type': 'application/json',
      Authorization : localStorage.getItem('token')
    }
  };

  React.useEffect(() => {
    fetch(process.env.REACT_APP_BACKEND +"/api/campaignsnews/"+campaign_id,requestOptions
    )
    .then((res) => res.json())
    .then((Message) => setDataCampaign(Message));
}, []); 
   
  var dataCampaign = !Campaign ? <p>Loading</p> :        
    Campaign.campaignsnews.map((datas, index) => (  
      <Card>
            <Card.Header>
            <a href={datas.link} target="_blank" class="txt-primary text-decoration-none"><h2 class="mb-2">{datas.title}</h2></a> 
            </Card.Header>
            <Card.Body>
                <p>
                    {datas.content}
                </p>
            </Card.Body>
         </Card>
     
     
  ));
  var dataCampaign2 = !Campaign ? <p>Loading</p> :  
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
        <Row style={{width:'100%'}}>
            <Profil/>
            <div class="col-md-1 "></div>
            <div class="col-md-8 ">
            <Container>
            <Row >
                <Card style={{marginLeft:40}}>
                    <Card.Body>
                    <Card className="text-center">
                        <Card.Header><h2>Campaign</h2></Card.Header>
                        <Card.Body style={{padding:0}}>
                        <Carousel>
                         {dataCampaign2}
                        </Carousel>
                        </Card.Body>
                        <Card.Footer className="text-muted" style={{padding:0}}>
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
                        {dataCampaign}
                        </Card.Body>
                        <Card.Body>
                        <a>
                            <Button href="/Campaign/Group-Chat/Buat-Berita"className='txt-right'style={{float:'right'}}>Buat Berita Terkait Campaign</Button>
                        </a> 
                        </Card.Body>
                        
                    
                </Card>
            </Row>
            </Container>

            </div> 
            <div class="col-md-1 "></div>
            

        </Row>

               
        
    );
}

export default GroupBerita;
