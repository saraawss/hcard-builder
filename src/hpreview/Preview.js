import React from 'react';
import '../styles/preview-styles.css';
import { Card, Form, Row, Col, Figure, Container } from 'react-bootstrap';

export default function Preview(props) {

  return (
    
    <Container className="hcontainer">
      <div>
      	<div className="preview-title">HCARD PREVIEW</div>
		<Card className="preview-card-padding">
		  <Card.Body className="card-color">
		  
		  <Row className="justify-content-md-center">
		    <Col xs lg="7">
		      <div className="user-name" id="hname"> {props.name} {' '} {props.surname}</div>
		    </Col>
			<Col md="auto"></Col>
		    <Col xs lg="3">
		      <div className="img-align">
		   {!props.profile && <Figure >
			  <Figure.Image
			    width={85}
			    height={80}
			    src="/profile.png"
			  />
			</Figure>}
			{props.profile && <Figure >
			  <Figure.Image
			    width={85}
			    height={80}
			    src={props.profile}
			  />
			</Figure>}
			</div>
		    </Col>
          </Row>
         
		  </Card.Body>
		  <Card.Body>
		  
		      <Form>
		      
		      	  <Row className="mb-3">
		             <Form.Group as={Col} className="seperator">
				       <div className="seperator-text"> EMAIL 
				       		<span className="margin-left-20 font-size-15" id="hemail"> {props.email} </span>
				       </div>
				       <hr />
				    </Form.Group>
				    
		          </Row>
		          
		          <Row className="mb-3">
		             <Form.Group as={Col} className="seperator">
				       <div className="seperator-text"> PHONE 
				       		<span className="margin-left-20 font-size-15" id="hphone"> {props.phone} </span>
				       </div>
				       <hr />
				    </Form.Group>
		          </Row>
		          
		          <Row className="mb-3">
		             <Form.Group as={Col} className="seperator">
				       <div className="seperator-text"> ADDRESS 
				       		<span className="margin-left-20 font-size-15" id="haddress1"> {props.houseName} {' '} {props.street}</span>
				       </div>
				       <hr />
				    </Form.Group>
		          </Row>
		          
		          <Row className="mb-3">
		             <Form.Group as={Col} className="seperator">
		             	<div className="seperator-text">
		               		<span className="margin-left-70 font-size-15" id="haddress2"> {props.suburb} {','} {props.state}</span>
		               	</div>
				       <hr />
				    </Form.Group>
		          </Row>
		          
		          <Row className="mb-3">
		             <Form.Group as={Col} className="seperator">
				       <div className="seperator-text"> POSTCODE 
				       		<span className="margin-left-20 font-size-15" id="hpostcode"> {props.postcode} </span>
				       </div>
				       <hr />
				    </Form.Group>
				    <Form.Group as={Col} className="seperator">
				       <div className="seperator-text"> COUNTRY 
				       		<span className="margin-left-20 font-size-15" id="hcountry"> {props.country} </span>
				       </div>
				       <hr />
				    </Form.Group>
		          </Row>
		    
			</Form>
		  </Card.Body>
		</Card>
      </div>
    </Container>
  );
}