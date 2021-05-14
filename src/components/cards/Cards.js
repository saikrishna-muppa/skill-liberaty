import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody
} from 'reactstrap';
import joincommunity from '../../images/img-1.png'
import learning from '../../images/img-2.png'
import job from '../../images/img-3.png'
import community from '../../images/img-4.png'
import '../cards/Cards.css'
const Cards = (props) => {
  return (
      
     <div className="card-header"> 
   <div className="card">  
      
      <Card style={{display: 'flex', flexDirection: 'row'}} >
        <CardImg  src={joincommunity} alt="Card image cap" />
        <CardBody >
          <CardTitle tag="h5">Step 01</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Join Community</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
           </CardBody>
      </Card>
      </div>
      <div className="card">  
      
      <Card style={{display: 'flex', flexDirection: 'row'}} >
        <CardImg  src={learning} alt="Card image cap" />
        <CardBody >
          <CardTitle tag="h5">Step 02</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Learning</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
           </CardBody>
      </Card>
      </div>
      <div className="card">  
      
      <Card style={{display: 'flex', flexDirection: 'row'}} >
        <CardImg  src={job} alt="Card image cap" />
        <CardBody >
          <CardTitle tag="h5">Step 03</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Get the Best Job</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
           </CardBody>
      </Card>
      </div>  <div className="card">  
      <Card style={{display: 'flex', flexDirection: 'row'}} >
        <CardImg  src={community} alt="Card image cap" />
        <CardBody >
          <CardTitle tag="h5">Step 04</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Community</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
           </CardBody>
      </Card>
      </div>
        
      </div>
        
  );
};

export default Cards;