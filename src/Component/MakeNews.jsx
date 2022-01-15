import React from "react";
import {Form,Container,Card,Row,Button} from 'react-bootstrap';
import 'react-pro-sidebar/dist/css/styles.css';
import Profil from "./MyProfil.jsx";
import { useState } from 'react';
import { useParams } from 'react-router-dom';


function BuatBerita() {
let {news_id}  = useParams();
const [title, setTitle] = useState();
const [content, setContent] = useState();
const [link, setLink] = useState();
const [image, setImage] = useState();

const handleSubmit= (e) => {
      
var data = new FormData();
var imagedata = document.querySelector('input[type="file"]').files[0];
data.append("image", imagedata);
data.append("title", title);
data.append("link", link);
data.append("content", content);
e.preventDefault();
      
    const requestOptions = {
        method: 'POST',
        headers: { 
          "Accept": "application/json",
          Authorization : localStorage.getItem('token')
        },
        body: data
      };
      fetch(process.env.REACT_APP_BACKEND +'/api/news/', requestOptions)
        .then(response => response.json())
        .then(data => {
            localStorage.setItem("news_id",data.id);
          alert("Pembuatan berhasil");
        });
    }
    const handleGabung= (e) => {
        const campaign_id = localStorage.getItem("campaign_id");
        const news_id = localStorage.getItem("news_id");
        fetch(process.env.REACT_APP_BACKEND +"/api/campaignsnews/",
        {
            method: 'POST',
            headers: { 
              'Content-Type': 'application/json',
              Authorization : localStorage.getItem('token')
            },
            body: JSON.stringify(
              { 
                news_id: localStorage.getItem("news_id"),
                campaign_id: localStorage.getItem("campaign_id"),
              }
            )
      
          })
          .then((res) => res.json())
          .then((result) =>{
             if (result) {
              alert("Berhasil menghubungkan news ke campaign");
             }else{
             }
          });
        
      }

      
    
    return (
        <Row className="background-image mb-0" style={{width:'100%'}}>
   
            <Profil/>
            <div class="col-md-1 "></div>
    
            <div class="col-md-8 ">
            <Container style={{marginTop:'10vh'}}>
            <Row >
            <h1 className="text-center text-white">Buat Berita</h1>
            <Card>
            <Card.Body>
            <Form onSubmit={e => { handleSubmit(e) }}>
              <Form.Group className="mb-3" controlId="CampaignID">
                  <Form.Label>Judul Berita</Form.Label>
                  <Form.Control type="title" placeholder="Masukan Judul" onChange={e => setTitle(e.target.value)}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="CampaignID">
                  <Form.Label>Link Berita</Form.Label>
                  <Form.Control type="link" placeholder="Masukan Judul" onChange={e => setLink(e.target.value)}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="CampaignDeskripsiID">
                  <Form.Label>Unggah Gambar</Form.Label>
                  <Form.Control type="file" placeholder="Masukan Judul" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="CampaignDeskripsiID">
                  <Form.Label>Deskripsi Berita</Form.Label>
                  <Form.Control as="textarea" rows={3} type="content" onChange={e => setContent(e.target.value)}/>
              </Form.Group> 
              <Button type="submit"  style={{float:'right'}}>Buat Berita</Button>
            </Form>
              <Button type="submit" onClick={e => { handleGabung(e) }} style={{float:'right', marginRight:20}}>Hubungkan ke campaign</Button>
            </Card.Body>
            </Card>
            </Row>
            </Container>

            </div> 
        <div class="col-md-1 "></div>
        </Row>

               
        
    );
}

export default BuatBerita;
