import React from 'react'
import { Container, Row, Col  } from 'react-bootstrap'
import logo from "../../assets/logo.png"
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import "./footer.css"

const Footer = () => {
  return (
    <section id="footer">
         <Container>
            <Row>
                <Col lg={5}>
                  <div className='footer_left'>
                    <img src={logo} alt="" />
                    <p>We are always open to discuss your project and improve your online presence.</p>
                  </div>
                  <div className="footer_bottom">
                <div className="bottom_left">
                  <h5>Email me at</h5>
                  <a href="mailto:#">contact@website.com</a>
                </div>
                <div className="bottom_right">
                  <h5>Call us</h5>
                  <a href="tel:+">0927 6277 28525</a>
                </div>
              </div>
                </Col>

                <Col lg={{span: 4, offset: 1}}>
                <div class="footer_right">
                <h3>Lets Talk!</h3>
                <p>We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.</p>
                <div class="social-links">
                  <a href="#"><FaFacebook className='f-icon'/></a>
                  <a href="#"><FaTwitter className='f-icon'/></a>
                  <a href="#"><FaSquareInstagram className='f-icon'/></a>
                  <a href="#"><FaLinkedin className='f-icon'/></a>
                </div>
              </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Footer