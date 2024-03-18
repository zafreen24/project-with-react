import React from 'react'
import { Container, Row, Col  } from 'react-bootstrap'
import { FaArrowRightLong } from "react-icons/fa6";
import "./banner.css"
import illustration from "../../../assets/Illustration.png"

const Banner = () => {
  return (
    <section id="banner">
        <Container>
            <Row>
                <Col lg={5}>
                <div className="ban_content">
              <h1>Building stellar websites for early startups</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <div className="btn">
                <a className="view" href="work.html">View Our Work</a>
                <a className="price" href="#">View Pricing<FaArrowRightLong className='ban-icon' /></a>
              </div>
            </div>
            </Col>
            <Col lg={{span: 6, offset: 1}}>
                <div className='ban-img'>
                   <img src={illustration} alt="" />
                </div>
            </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Banner