import React from 'react'
import { Container, Row, Col  } from 'react-bootstrap'

import "./stellar.css"

const Stellar = () => {
  return (
    <section id="steller">
        <Container>
            <Row>
                <Col lg={6} p-0>
                <div className="steller_img">
              <h2>Building stellar websites for early startups</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua ut
                enim.
              </p>
            </div>
                </Col>
                <Col lg={6} p-0>
                <div className="blue_img">
              <h3>Send inquiry</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
              <form action="" className="table">
                <input type="text" name="name" placeholder="Your name" className="contact" required=""/>
                <input type="email" name="email" placeholder="email" className="contact" required=""/>
                <input type="figma" name="figma" placeholder="Paste your Figma design URL" className="contact_figma" required=""/>
                <button type="submit">Send an Inquiry</button>
                <a class="btn_touch" href="#">Get in touch with us</a>
              </form>
            </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Stellar