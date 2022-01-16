
import React from "react";
import './css/styles.css';
import { Button,Container,Card } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import NavBar from './Navbar.jsx';
import Berita1 from "./assets/img/Berita.jpg";
import Berita2 from "./assets/img/Berita2.jpg";
import Berita3 from "./assets/img/Banner.jpg";
import Campaign1 from "./assets/img/Campaign.jpg";

function Berita() {
  const [Berita, setDataBerita] = React.useState(null);
  const [Campaign, setDataCampaign] = React.useState(null);
  console.log("tets");

//GET (get Daata News)
React.useEffect(() => {
fetch(process.env.REACT_APP_BACKEND +"/api/news/",{
method: 'GET'
})
.then((res) => res.json())
.then((Berita) => setDataBerita(Berita));
}, []);
 //GET (get Daata News)
React.useEffect(() => {
fetch(process.env.REACT_APP_BACKEND +"/api/campaigns/",{
method: 'GET'
})
.then((res) => res.json())
.then((Campaign) => setDataCampaign(Campaign));
 }, []);  

 const handleDiskusi= (e) => {
  const campaign_id = e.target.id;
  const user_id = localStorage.getItem("user_id");
  fetch(process.env.REACT_APP_BACKEND +"/api/usercampaigns/check?campaign_id="+campaign_id+"&user_id="+user_id,{
      method: 'GET'
    })
    .then((res) => res.json())
    .then((result) =>{
       if (result) {
        alert("Selamat datang");
        window.location.href = "/Campaign/Group-Chat/Chat/"+campaign_id;
       }else{
         alert("Kamu belum tergabung dalam diskusi");

       }
    });
  
}

const handleGabung= (e) => {
  const campaign_id = e.target.id;
  const user_id = localStorage.getItem("user_id");
  fetch(process.env.REACT_APP_BACKEND +"/api/usercampaigns",
  {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        Authorization : localStorage.getItem('token')
      },
      body: JSON.stringify(
        { 
          user_id: localStorage.getItem("user_id"),
          campaign_id: campaign_id,
        }
      )

    })
    .then((res) => res.json())
    .then((result) =>{
       if (result) {
        alert("Berhasil bergabung silahkan klik diskusi untuk mulai diskusi");
       }else{
       }
    });
  
}

var ButtonCampaign = localStorage.getItem("name") === "" ? 
<a>
<Button href="/Akses-ditolak" style={{marginRight:10,fontSize: 12}}> Daftar</Button>
<Button href="/Akses-ditolak" style={{ fontSize: 12}}>Diskusi</Button>
</a> 
:   
<a>
<Button onClick={e => { handleGabung(e) }} id={datas.id} style={{marginRight:10,fontSize: 12}}> Daftar</Button>
<Button onClick={e => { handleDiskusi(e) }} id={datas.id} style={{ fontSize: 12}}>Diskusi</Button>
</a> 
; 

var dataBerita = !Berita ? <p>Loading</p> :        
    Berita.map((datas, index) => (  
      <Carousel.Item>
        <img
          className="d-block"
            style={{
              height:'100%',
              minWidth: 320,
              maxWidth: 1470,
              minHeight: 360,
              maxHeight: 480,
            }}
          src={Berita1}
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
             
            
        </Carousel.Caption>
      </Carousel.Item>
     
    ));

var dataBerita2 = !Berita ? <p>Loading</p> :   
    Berita.map((datas, index) => (  
     
      <Carousel.Item>  
                      <Card style={{ width:'100%', height:'170px'}}>

                          <Card.Img variant="top" src={Berita1} style={{width: '100%',height: '168px' }} />

                          <Card.Body>
                            <Card.ImgOverlay>
                            <div style={{textAlign:'left'}}>
                            <Card.Title>
                            <a href="" class="txt-primary text-decoration-none"><h2 class="mb-2">
                              {datas.title}
                            </h2></a>
                            </Card.Title>
                            </div>
                            </Card.ImgOverlay>
                          </Card.Body>
                      </Card>
                      <br/>
                      <Card style={{ width:'100%', height:'170px'}}>
                          <Card.Img variant="top" src={Berita2} style={{width: '100%',height: '168px' }} />
                          <Card.Body>
                            <Card.ImgOverlay>
                            <div style={{textAlign:'left'}}>
                            <Card.Title>
                            <a href="" class="txt-primary text-decoration-none"><h2 class="mb-2">
                              {datas.title}
                            </h2></a>
                            </Card.Title>
                            <Card.Text>
                            {datas.content}
                            </Card.Text>
                            </div>
                            </Card.ImgOverlay>
                          </Card.Body>
                      </Card>
                      <br/>
      </Carousel.Item>
    ));
    
var dataBerita3 = !Berita ? <p>Loading</p> :   
    Berita.map((datas, index) => ( 
      <div>
                       <div class="row border-bottom">
                                <div class="col-sm-4 grid-margin mb-20">
                                    <Card>
                                    <div>
                                        <img
                                        src={Berita3}
                                        alt="thumb"
                                        class="img-fluid"
                                        />
                                    </div>
                                    <Card.ImgOverlay>  
                                        <Card.Title className="row"><div class="col-md-12 badge badge-danger">Berita terkini</div></Card.Title>
                                    </Card.ImgOverlay>
                                    
                                    </Card>
                                </div>
                                <div class="col-sm-8  grid-margin" style={{textAlign:'left'}}>
                                    <a href="" class="text-white:hover text-decoration-none"><h1 class="mb-2 font-weight-600">
                                    {datas.title}
                                    </h1></a>
                                    <div class="fs-13 mb-2">
                                    </div>
                                    <p class="mb-0">
                                    {datas.content}
                                    </p>
                                </div>
                            </div>
                            <br/>
     </div>
    )); 
    
var dataCampaign = !Campaign ? <p>Loading</p> :        
    Campaign.map((datas, index) => (  
      
      <div class="col-sm-6 grid-margin">
        <div class="position-relative">
        <Card style={{ width: '100%' }}>
        <Card.Img variant="top" src={Campaign1}/>
        <Card.Body  style={{textAlign:'left'}}>
            <Card.Title> {datas.code}</Card.Title>
            <div style={{float:'right'}}>
            {ButtonCampaign}
            </div>
        </Card.Body>
        </Card> 
          <div class="badge-positioned w-90">
            <div
              class="d-flex justify-content-between align-items-center"
            >
              <Card.ImgOverlay>  
                    <Card.Title className="row"><div class="col-md-12 badge badge-danger">Berita terkini</div></Card.Title>
              </Card.ImgOverlay>
            </div>
          </div>
        </div>
      </div>
     
    ));

var dataCampaign2 = !Campaign ? <p>Loading</p> :        
Campaign.map((datas, index) => (  
  <div class="row border-bottom mt-3">
     <div class="col-md-5">
        <Card>
        <div class="position-relative">
      
            <img
            src={Berita1}
            alt="thumb"
            class="img-fluid"
            />
        
        </div>
      </Card>
    </div>
    <div class="col-md-7" style={{textAlign:'left',marginBottom:10}}>
        <a href="" class="text-white:hover text-decoration-none"><p class="mb-0 font-weight-600" style={{ fontSize: 15}}>
        {datas.code}
        </p></a>
    <div class="" style={{ fontSize: 10}}>
        <span class="mr-2 text-bold" >admin </span >5 hari lalu
    </div>
    </div>
  <br/>
</div>

));
    
return (
      <div>
      <NavBar/>
      {/*news heeader*/}
       <Container style={{marginTop:80}}>
        <div className="row">
              <div class="col-md-8 stretch-card grid-margin">
              <Card className="text-white" style={{
                minWidth: 320,
                maxWidth: 1920,
                height: 480,
                marginBottom:50,
                }}>
              <Card.Body 
                style={{ padding:0 }}
              >
              <Carousel fade>
              {dataBerita}
              </Carousel>
              </Card.Body>
              </Card> 
              </div>
              <div className="col-md-4 stretch-card grid-margin">
                  <Card className="bg-dark text-white" 
                  style={{
                    minWidth: 320,
                    maxWidth: 1080,
                    height: 480,
                    marginBottom:50,
                    PaddingLeft:10,
                    PaddingRight:10
                    }}>
                  <Card.Body>
                  <Card.Title className="row badge badge-warning" style={{ fontSize: 15,textAlign:'center' }}><div class="col-md-12" >List berita terbaru</div></Card.Title>
                  <Carousel fade controls={false}>
                  {dataBerita2}
                  </Carousel>
                  </Card.Body>
                  </Card>
              </div>
        </div>
      </Container>
      {/*news list*/}
      <Container style={{
                marginTop:50,
                }}>
                <Card style={{padding:30}}>
                <div className="row">
                    <div className="col-md-3 stretch-card grid-margin">
                      <div className="card">
                        <div className="card-body">
                            <h2 style={{marginLeft:25}}>Category</h2>
                            <ul className="vertical-menu text-decoration-none mr-10 text-semi-bold" style={{listStyleType: 'none'}}>
                            <li><a href="#" className="text-decoration-none  txt-primary-2">Politik</a></li>
                            <li><a href="#" className="text-decoration-none  txt-primary-2">Mancanegara</a></li>
                            <li><a href="#" className="text-decoration-none  txt-primary-2">Keuangan</a></li>
                            <li><a href="#" className="text-decoration-none  txt-primary-2">Kesehatan</a></li>
                            <li><a href="#" className="text-decoration-none  txt-primary-2">Teknologi</a></li>
                            <li><a href="#" className="text-decoration-none  txt-primary-2">Pekerjaan</a></li>
                            <li><a href="#" className="text-decoration-none  txt-primary-2">Media</a></li>
                            <li><a href="#" className="text-decoration-none  txt-primary-2">Bisnis</a></li>
                            <li><a href="#" className="text-decoration-none  txt-primary-2">Lingkungan</a></li>
                            <li><a href="#" className="text-decoration-none  txt-primary-2">Mental</a></li>
                            <li><a href="#" className="text-decoration-none  txt-primary-2">Anak Anak</a></li>
                            <li><a href="#" className="text-decoration-none  txt-primary-2">Sosial</a></li>
                            </ul>
                        </div>
                      </div>
                    </div> 
                    <div class="col-md-9 stretch-card grid-margin">
                        <Card>
                            <Card.Body>
                            {dataBerita3}
                            </Card.Body>
                            <Card.Body>
                                <Button href="/Berita/List-all-berita"className='txt-right'style={{float:'right'}}>Lihat Semua</Button>
                            </Card.Body>
                        </Card>
                    </div> 
                </div>
                </Card>
        </Container>
        {/*campaigns list*/}
        <Container style={{marginTop:50}}>
            <div class="row" data-aos="fade-up">
              <div class="col-sm-12 grid-margin">
                <Card>
                  <Card.Body>
                    <div class="row">
                      <div class="col-lg-8">
                        <div class="d-flex justify-content-between align-items-center">
                        <div class="card-title">
                            Campaign
                        </div>
                        </div>
                        <div class="row">
                        {dataCampaign}
                        </div>
                      </div>
                      <div class="col-lg-4">
                      <div class="d-flex justify-content-between align-items-center">
                        <div class="card-title">
                            Last Campaign
                        </div>
                      </div>
                      <Card>
                        <Card.Body> 
                            {dataCampaign2}
                        </Card.Body>
                        <Card.Body>
                            <Button href="/Campaign"className='txt-right'style={{float:'right',fontSize: 10}}>Lihat Semua</Button>
                        </Card.Body>
                        </Card>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </Container>
    </div>

  );
}

export default Berita;
