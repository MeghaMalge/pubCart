import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import './login.css'

function Login() {
  const [show, setShow] = useState(false);

  return (
    <Row>
      <Col xs={6}>
        <Toast className="toast" onClose={() => setShow(false)} show={show} delay={3000}>
          <Toast.Header>
            

            <strong className="me-auto">Login</strong>
            {/* <small>11 mins ago</small> */}
          </Toast.Header>
          <Toast.Body>
      
          <form action="action_page.php" method="post" className="form">
  <div class="imgcontainer">
    {/* <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.in%2FPupkart-Professional-Stainless-Cutter-Medium%2Fdp%2FB07Q3LW8LY&psig=AOvVaw2TjmziLDSwI3IGasPLsbKT&ust=1665471379695000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCMif9cGK1foCFQAAAAAdAAAAABAJ" alt="pubcart"  /> */}
  </div>

  <div class="right-container">
    <label htmlfor="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required/>

    <label htmlfor="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required/>

    <Button variant="secondary" className="login-button" type="submit">Login</Button>
    {/* <label>
      <input type="checkbox" checked="checked" name="remember"/> Remember me
    </label> */}
  </div>

  {/* <div class="container" style="background-color:#f1f1f1">
    <button type="button" class="cancelbtn">Cancel</button>
    <span class="psw">Forgot <a href="#">password?</a></span>
  </div> */}
</form> 

          </Toast.Body>
        </Toast>
      </Col>
      <Col xs={6}>
        <Button variant="light" onClick={() => setShow(true)}>login</Button>
      </Col>
    </Row>
  );
}




export default Login;


