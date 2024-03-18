import React from 'react'
import { Container, Row, Col  } from 'react-bootstrap'
import man from "../../assets/man.png"
import women from "../../assets/woman.png"
import laptop from "../../assets/apple-monitors.png"
import { FaArrowRight } from "react-icons/fa";
import "./blog.css"

const Blog = () => {
  return (
    <section id="blog">
        <Container>
            <Row>
                <Col lg={2}>
            <div className="blog_text">
              <h2>Our blog</h2>
            </div>
                </Col>
            </Row>
            <Row>
            <Col lg={4} className='blog_items'>
              <img src={man} alt="" />
              <h6>19 Jan 2022</h6>
            <h3>
              How one Webflow user grew his single person consultancy from
              $0-100K in 14 months
            </h3>
            <p>
              See how pivoting to Webflow changed one person’s sales strategy
              and allowed him to attract
            </p>
            <a href="#">Read More<FaArrowRight className='read-icon'/></a>
            </Col>

            <Col lg={4} className='blog_items'>
              <img src={women} alt="" />
              <h6>19 Jan 2022</h6>
            <h3>
              How one Webflow user grew his single person consultancy from
              $0-100K in 14 months
            </h3>
            <p>
              See how pivoting to Webflow changed one person’s sales strategy
              and allowed him to attract
            </p>
            <a href="#">Read More<FaArrowRight className='read-icon'/></a>
            </Col>
            <Col lg={4} className='blog_items'>
              <img src={laptop} alt="" />
              <h6>19 Jan 2022</h6>
            <h3>
              How one Webflow user grew his single person consultancy from
              $0-100K in 14 months
            </h3>
            <p>
              See how pivoting to Webflow changed one person’s sales strategy
              and allowed him to attract
            </p>
            <a href="#">Read More<FaArrowRight className='read-icon'/></a>
            </Col>

            </Row>
        </Container>
    </section>
  )
}

export default Blog