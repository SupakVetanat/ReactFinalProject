import React from 'react'
import {Card,CardDeck} from 'react-bootstrap';
import FBpage from '../img/FBpage.jpg'
import Tiktok from '../img/Tiktok.jpeg'
import Twitter from '../img/Twitter.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

const ArtCard = () => {
  return (
    <CardDeck>
    <a href='https://www.facebook.com/kapus.art/'>
      <Card>
      <Card.Img variant="top" src={FBpage} />
      <Card.Body>
        <Card.Title>Facebook Fanpage</Card.Title>
      </Card.Body>
    </Card>
    </a>
    <a href='https://www.tiktok.com/@fahkapus'>
    <Card>
      <Card.Img variant="top" src={Tiktok} />
      <Card.Body>
        <Card.Title>Tiktok</Card.Title>
      </Card.Body>
    </Card></a>
    <a href='https://twitter.com/i/events/1387716853925965827'><Card>
      <Card.Img variant="top" src={Twitter} />
      <Card.Body>
        <Card.Title>Twitter</Card.Title>
      </Card.Body>
    </Card></a>
  </CardDeck>
   
  )
}

export default ArtCard