
import React from "react";
import './css/styles.css';
import { Button,Card,Row } from 'react-bootstrap';

function NoAkses() {
  return (
    <Card className="background-image mb-0" >
      <Row className="justify-content-center align-self-center p-0" style={{marginTop:'25vh'}}>
        <h1 className="text-light text-center">Gagal Akses</h1>
        <Card style={{ textAlign:'Center',width: '30rem', padding:0}}>
            <Card.Header >Tidak Bisa Di Akses</Card.Header>
              <Card.Body >
                <h1 style={{textAlign:'center'}}>Silahkan login terlebih dahulu</h1>
                <Card.Text>
                  Beberapa fitur tidak bisa diakses secara umum.
                </Card.Text>
                <Button href="/Login"variant="primary">Masuk</Button>
              </Card.Body>
            <Card.Footer className="text-muted">terima kasih</Card.Footer>
          </Card>
        </Row>
    </Card>
  );
}

export default NoAkses;
