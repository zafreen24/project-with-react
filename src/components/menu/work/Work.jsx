import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { FaArrowRight } from "react-icons/fa6";
import "./work.css"
import pic from "../../../assets/pointer 1.png"
import pic2 from "../../../assets/pointer 02.png"
import pic3 from "../../../assets/pointer 03.png"
import pic4 from "../../../assets/pointer 04.png"

const Work = () => {
  return (
    <section id="work">
        <Container>
            <Row>
                <Col lg={4}>
                <div className="work_here">
              <h3>How we work</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
              <div className="work_btn">
                <a className="get" href="#">Get in touch with us<FaArrowRight className='get-icon'/></a>
              </div>
            </div>
                </Col>
                <Col lg={{span: 6, offset: 1}}>

                    <Row>
                       <Col lg={6}>
                        <div className="pic-1">
                         <img src={pic} alt="one" />
                           <h4>Strategy</h4>
                             <p>
                              Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                        </div>
                       </Col>
  
                       <Col lg={6}>
                        <div className="pic-2">
                         <img src={pic2} alt="one" />
                         <h4>Wireframing</h4>
                             <p>
                              Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                        </div>
                       </Col>
 
                       <Col lg={6}>
                        <div className="pic-3">
                         <img src={pic3} alt="one" />
                         <h4>Design</h4>
                         <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                        </div>
                       </Col>

                       <Col lg={6}>
                        <div className="pic-4">
                         <img src={pic4} alt="one" />
                         <h4>Development</h4>
                         <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                        </div>
                       </Col>

                    </Row>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Work