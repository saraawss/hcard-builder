import React, { useState, useEffect } from 'react';
import '../styles/form-styles.css';
import { Container, Form, Row, Col, Button, Modal} from 'react-bootstrap';
import ImageUploader from './ImageUploader.js';

export default function UserForm(props) {
const [profileState, setProfileState] = useState(props);
const [image, setImage] = useState(null);

const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const setProfile = () => {
	setProfileState({ ...profileState, profile: image });
	handleClose();
}


useEffect(() => {
    
    props.onChange(profileState);

    return () => console.log('unmounting...');
}, [profileState])
  

const  handleChange = async (e) =>  {
    setProfileState({ ...profileState, [e.target.name]: e.target.value });
}

  return (
	<>
	
	<Container>
      <p className="title">hCard Builder</p>
    <div>
      <Form>
      
      	  <Row className="justify-content-md-center">
             <Col xs lg="11" className="form-seperator">
		       <div className="form-seperator-text" id="lpd"> PERSONAL DETAILS </div>
		       <div id="hlinepd"> <hr /> </div>
		    </Col>
          </Row>
                    
		  <Row className="justify-content-md-center">
		    <Col xs lg="5">
		      <Form.Label column="sm" className="form-label-color" >
		      	GIVEN NAME
		      </Form.Label>
		      <Col>
		       <Form.Control size="sm" type="text" id="name" name="name" required onChange={handleChange}/>
		      </Col>
		    </Col>
			<Col md="auto"></Col>
		    <Col xs lg="5">
		      <Form.Label column="sm" className="form-label-color" >
		       SURNAME
		      </Form.Label>
		      <Col>
		       <Form.Control size="sm" type="text" id="surname" name="surname" required onChange={handleChange}/>
		      </Col>
		    </Col>
          </Row>
          
          <Row className="justify-content-md-center">
		    <Col xs lg="5">
		      <Form.Label column="sm" lg={6} className="form-label-color" >
		      	EMAIL
		      </Form.Label>
		      <Col>
		       <Form.Control size="sm" type="email"  id="email" name="email" required onChange={handleChange}/>
		      </Col>
		   </Col>
			<Col md="auto"></Col>
		    <Col xs lg="5">
		      <Form.Label column="sm" lg={3} className="form-label-color" >
		       PHONE
		      </Form.Label>
		      <Col>
		       <Form.Control size="sm" type="text" id="phone" name="phone" required onChange={handleChange}/>
		      </Col>
		    </Col>
          </Row>
          
          <Row className="justify-content-md-center">
             <Col xs lg="12" className="form-seperator">
               <div className="form-seperator-text" id="ladd"> ADDRESS </div>
		       <div id="hlineadd"> <hr /> </div> 
		    </Col>
          </Row>
          
          <Row className="justify-content-md-center">
		    <Col xs lg="5">
		      <Form.Label column="sm" lg={7} className="form-label-color">
		      	HOUSE NAME OR #
		      </Form.Label>
		      <Col>
		       <Form.Control size="sm" type="text"  id="houseName" name="houseName" required onChange={handleChange}/>
		      </Col>
		    </Col>
			<Col md="auto"></Col>
		    <Col xs lg="5">
		      <Form.Label column="sm" lg={3} className="form-label-color">
		       STREET
		      </Form.Label>
		      <Col>
		       <Form.Control size="sm" type="text" id="street" name="street" required onChange={handleChange}/>
		      </Col>
		    </Col>
          </Row>
          
          <Row className="justify-content-md-center">
		    <Col xs lg="5">
		      <Form.Label column="sm" lg={4} className="form-label-color">
		      	SUBURB
		      </Form.Label>
		      <Col>
		       <Form.Control size="sm" type="text"  id="suburb" name="suburb" required onChange={handleChange}/>
		      </Col>
		    </Col>
			<Col md="auto"></Col>
		    <Col xs lg="5">
		      <Form.Label column="sm" lg={3} className="form-label-color">
		       STATE
		      </Form.Label>
		      <Col>
		       <Form.Control size="sm" type="text" id="state" name="state" required onChange={handleChange}/>
		      </Col>
		    </Col>
          </Row>
          
          <Row className="justify-content-md-center">
		    <Col xs lg="5">
		      <Form.Label column="sm" lg={4} className="form-label-color">
		      	POSTCODE
		      </Form.Label>
		      <Col>
		       <Form.Control size="sm" type="text" id="postcode" name="postcode" required onChange={handleChange} />
		      </Col>
		    </Col>
			<Col md="auto"></Col>
		    <Col xs lg="5">
		      <Form.Label column="sm" lg={3} className="form-label-color">
		       COUNTRY
		      </Form.Label>
		      <Col>
		       <Form.Control size="sm" type="text" id="country" name="country" required onChange={handleChange}/>
		      </Col>
		    </Col>
          </Row>
          
          <Row className="justify-content-md-center button-group">
          	
	         <Col xs lg="5">
	          	<div className="button-group-padding">
				    <Button variant="secondary" size="lg" className="shadow-sm button-grey" onClick={handleShow}>
				      Upload Avatar
				    </Button>
				    
				</div>
			</Col>	
			<Col md="auto"></Col>
			<Col xs lg="5">	
				<div className="button-group-padding">    
				    <Button variant="primary" type="submit" size="lg" className="shadow-sm button-blue">
				      Create hCard
				    </Button>
				 </div>
			</Col>	
    	</Row>
 
	</Form>
      
            
    </div>
    </Container>
   
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
			<ImageUploader image={image} setImage={setImage}/> 
		</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" size="lg" className="shadow-sm button-blue" onClick={setProfile}>
            Upload Image
          </Button>
          <Button variant="secondary" size="lg" className="shadow-sm button-grey" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}