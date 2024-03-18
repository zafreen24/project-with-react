import React from 'react'
import { Container, Row, Col  } from 'react-bootstrap'
import "./bottom.css"

const Bottom = () => {
  return (
    <section id="bottom_part">
        <Container>
            <Row>
                <Col lg={3}>
                <div className="bellow_text">
                <h5>Copyright 2022, Finsweet.com</h5>
                </div>
                </Col>
                <Col lg={{span: 5, offset: 4}}>
                <div className="menu_bottom">
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
          </div>
                </Col>
            </Row>
        </Container>        
    </section>
  )
}

export default Bottom