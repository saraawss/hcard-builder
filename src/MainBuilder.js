import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'react-bootstrap';

import UserForm from './hbuilder/UserForm.js';
import Preview from './hpreview/Preview.js';

function MainBuilder() {

  var data = {name: '',
                        surname: '',
                        email: '',
                        phone: '',
                        houseName:'',
                        street:'',
                        suburb:'',
                        state:'',
                        postcode:'',
                        country:'',
                        profile:''}
                   
                        
 const [userInfo, setUserInfo] = React.useState(data);
 

function handleChange(newValues) {
	  
      setUserInfo(newValues);
       
}

  return (
	
    <Container>
	  <Row className="justify-content-md-center">
	    <Col xs lg="5">
	       <UserForm {...userInfo} onChange={handleChange} />
	    </Col>
	    <Col md="auto"></Col>
	    <Col xs lg="5">
	      <Preview {...userInfo} />
	    </Col>
	  </Row>
	</Container>
   
  );
}

export default MainBuilder;
