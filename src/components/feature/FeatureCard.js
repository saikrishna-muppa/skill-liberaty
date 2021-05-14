import React from 'react'
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
  } from 'reactstrap';
  
const FeatureCard = () => {
  return (
    <div className="card-head-container">
      
      <CardDeck>
      <Card>
        <CardImg top width="100%" src="https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Group Seminars</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. In itaque vel libero.</CardSubtitle>
          <CardText><ul
          ><li><span className="card-li::marker"/> Our job is to make your life easier.</li>
          <li>Experience students as it should be.</li>
          <li>Doing the right thing, at the right time.</li>
          <li>Explore The World Of Our Graduates.</li>
          </ul> </CardText>
          <Button  className="btn-primary learn">Learn More</Button>
        </CardBody>
      </Card>
      </CardDeck>
      <CardDeck>
      <Card>
        <CardImg top width="100%" src="https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Group Seminars</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. In itaque vel libero.</CardSubtitle>
          <CardText><ul
          ><li><span className="card-li::marker"/> Our job is to make your life easier.</li>
          <li>Experience students as it should be.</li>
          <li>Doing the right thing, at the right time.</li>
          <li>Explore The World Of Our Graduates.</li>
          </ul> </CardText>
          <Button  className="btn-primary learn">Learn More</Button>
        </CardBody>
      </Card>
      </CardDeck>
      <CardDeck>
      <Card>
        <CardImg top width="100%" src="https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Group Seminars</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. In itaque vel libero.</CardSubtitle>
          <CardText><ul
          ><li><span className="card-li::marker"/> Our job is to make your life easier.</li>
          <li>Experience students as it should be.</li>
          <li>Doing the right thing, at the right time.</li>
          <li>Explore The World Of Our Graduates.</li>
          </ul> </CardText>
          <Button className="btn-primary learn">Learn More</Button>
        </CardBody>
      </Card>
      </CardDeck>
      <CardDeck >
      <Card >  
        <CardImg top width="100%" src="https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Group Seminars</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. In itaque vel libero.</CardSubtitle>
          <CardText><ul
          ><li><span className="card-li::marker"/> Our job is to make your life easier.</li>
          <li>Experience students as it should be.</li>
          <li>Doing the right thing, at the right time.</li>
          <li>Explore The World Of Our Graduates.</li>
          </ul> </CardText>
          <Button  className="btn-primary learn">Learn More</Button>
        </CardBody>
      </Card>
      </CardDeck>

    </div>
  )
}

export default FeatureCard
