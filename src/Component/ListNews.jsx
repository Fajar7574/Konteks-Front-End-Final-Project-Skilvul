
import React from "react";
import './css/styles.css';
import { Button,Container,Card, Badge} from 'react-bootstrap';
import NavBar from './Navbar.jsx';
import Berita1 from "./assets/img/Berita.jpg";

function ListBerita() {

    const [Berita, setDataBerita] = React.useState(null);
  
    //GET (get Daata News)
    React.useEffect(() => {
      fetch(process.env.REACT_APP_BACKEND +"/api/news/",{
        method: 'GET'
      })
      .then((res) => res.json())
      .then((Berita) => setDataBerita(Berita));
    }, []);

    var dataBerita3 = !Berita ? <p>Loading</p> :   
    Berita.map((datas, index) => ( 
      <div>
                       <div class="row border-bottom">
                                <div class="col-sm-4 grid-margin mb-20">
                                    <Card>
                                    <div>
                                        <img
                                        src={Berita1}
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
                                    <span class="mr-2">admin </span>di update {datas.createdAt}
                                    </div>
                                    <p class="mb-0">
                                    {datas.content}
                                    </p>
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
                        {dataBerita3}
                        </Card.Body>
                        <Card.Body>
                            <Button className='txt-right'style={{float:'right'}}>Buat Berita</Button>
                        </Card.Body>
                    </Card>

                </div> 
            </div>
      </Container>
      </div>
  );
}

export default ListBerita;
