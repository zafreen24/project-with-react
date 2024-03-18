import React from 'react'
import { Container, Row, Col  } from 'react-bootstrap'
import { FaArrowRight,} from "react-icons/fa6";
import "./project.css"
import proj from "../../assets/Card 01.png"
import projec from "../../assets/Card 02.png"
import pro from "../../assets/Card 03.png"
import { FaArrowRightLong } from "react-icons/fa6";


const Project = () => {
  return (
    <section id="view">
        <Container>
            <Row>
                <Col lg={4}>
                <div className="expect">
                  <h3>View our projects</h3>
                </div>
                </Col>
                <Col lg={{span: 6, offset: 1}}>
                <div className="extend">
              <h5>View More<FaArrowRight className='view-icon'/></h5>
            </div>
                </Col>
            </Row>
            <Row>
            <Col lg={8}>
            <div className="expect_img">
              <img src={proj} alt="Card" />
              <div className="view_left_text">
                <h4>Workhub office Webflow Webflow Design</h4>
                <a href="#">View project<FaArrowRightLong /></a>
              </div>
            </div>
            </Col>
            <Col lg={4}>
            <div className="expect_img2">
              <img src={projec} alt="card 02" />
              <div className="view_left_text2">
                <h4>Unisaas Website Design</h4>
                <a href="#">View portfolio<FaArrowRightLong /></a>
              </div>
            </div>
            <div className="expect_img3">
              <img src={pro} alt="card 02" />
            </div>
            </Col>
            </Row>
        </Container>

    </section>
  )
}

export default Project