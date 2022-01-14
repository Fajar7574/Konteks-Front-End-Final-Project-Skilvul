
import React from "react";
import './css/styles.css';
import { Button,Container,Card } from 'react-bootstrap';
import NavBar from './Navbar.jsx';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

function Campaign() {
let {campaign_id}  = useParams();
const [name, setName] = useState();
const [password, setPassword] = useState();
React.useEffect(() => {
    if (localStorage.getItem("name") === ""){
    setName(localStorage.getItem("name"));
    }else{
    setName(localStorage.getItem("pengguna baru"));
      }
    }, []);
    
    var BuatCampaign = localStorage.getItem("name") === "" ? 
    <a>
      <Button href="/Akses-ditolak"className='txt-right'style={{float:'right'}}>Buat Campaign</Button>
    </a> 
    :   
    <a>
      <Button href="/Campaign/Group-Chat"className='txt-right'style={{float:'right'}}>Buat Campaign</Button>
    </a> 
    ; 

const [Campaign, setDataCampaign] = React.useState(null);
console.log("tets");
 //GET (get Daata News)
 React.useEffect(() => {
    fetch("http://localhost:5000/api/campaigns/",{
      method: 'GET'
    })
    .then((res) => res.json())
    .then((Campaign) => setDataCampaign(Campaign));
}, []); 


const handleDiskusi= (e) => {
  const campaign_id = e.target.id;
  const user_id = localStorage.getItem("user_id");
  fetch("http://localhost:5000/api/usercampaigns/check?campaign_id="+campaign_id+"&user_id="+user_id,{
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
  fetch("http://localhost:5000/api/usercampaigns",
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

var dataCampaign = !Campaign ? <p>Loading</p> :   
    Campaign.map((datas, index) => (
        <div>
        <div class="row border-bottom">
                 <div class="col-sm-4 grid-margin mb-20">
                     <Card>
                     <div>
                         <img
                         src={"http://127.0.0.1:5000/api/campaigns/image/"+datas.id}
                         alt="thumb"
                         class="img-fluid"
                         />
                     </div>
                     
                     </Card>
                 </div>
                 <div class="col-sm-8  grid-margin" style={{textAlign:'left'}}>
                     <a href="" class="text-white:hover text-decoration-none"><h1 class="mb-2 font-weight-600">
                     {datas.code}
                     </h1></a>
                     <div class="fs-13 mb-2">
                     <span class="mr-2">admin </span>di update {datas.createdAt}
                     </div>
                     <Button onClick={e => { handleGabung(e) }} id={datas.id} style={{marginRight:10,fontSize: 12}}>
                     Daftar
                    </Button>
                    <Button onClick={e => { handleDiskusi(e) }} id={datas.id} style={{ fontSize: 12}}>Diskusi</Button>
                 </div>
             </div>
             <br/>
        </div>
    ));
    

  return (
    <div>
    <NavBar/>
    <Container style={{
        marginTop:100,
        }}>
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
                    {dataCampaign}
                    </Card.Body>
                    <Card.Body>
                               {BuatCampaign}
                    </Card.Body>
                </Card>

            </div> 
        </div>
    </Container>
    </div>
  );
}

export default Campaign;
