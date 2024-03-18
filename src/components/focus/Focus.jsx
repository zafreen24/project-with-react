import React from 'react'
import { Container, Row, Col  } from 'react-bootstrap'
import woman from "../../assets/Mask Group.png"
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import "./focus.css"
const Focus = () => {
  return (
    <section id="client">
<Container>
            <Row>
                <Col lg={3} className='client_text'>
                <h2>What our clients say about us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
                </Col>

                <Col lg={{span: 8, offset: 1}} className='client_text_right'>
                <h3>"The best agency we’ve worked with so far. They understand our
                 product and are able to add new features with a great focus."
                </h3>

                <Row justify-content-between align-items-center>
                <Col lg={2}>
                <div className="client_img">
                  <img src={woman} alt="mask" />
                  <div>
                    <h4>Jenny Wilson</h4>
                    <p>Vice President</p>
                  </div>
                </div>
                </Col>
                {/* <Col lg={2}>
                <div className="client_icon">
                <FaAngleLeft className='left'/>
                <FaAngleRight className='right'/> 
                </div>
                </Col> */}
            
                </Row>
                </Col>
            </Row>
</Container>
    </section>
  )
}

export default Focus