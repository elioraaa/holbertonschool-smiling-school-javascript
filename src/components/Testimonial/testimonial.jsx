import React, { useState } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import goni from "../../images/profile_5.jpg";
import arrowLeft from "../../images/arrow_white_left.png";
import arrowRight from "../../images/arrow_white_right.png";
import "bootstrap/dist/css/bootstrap.min.css";
import './testimonial.css';

const testimonials = [
    {
        quote: "« Those tutorials are concise and go straight to the point. I can't think of a better place to learn smiling. And it's so fun! »",
        name: "Person Name",
        role: "Weather Presenter",
        img: goni,
    },
    {
        quote: "« Another testimonial. »",
        name: "Another Person",
        role: "Content Creator",
        img: goni,
    },
];

const Testimonial = () => {
    const [number, setNumber] = useState(0);

    const nextTestimonial = () => {
        if (number < testimonials.length - 1) {
            setNumber(number + 1);
        }
    };

    const prevTestimonial = () => {
        if (number > 0) {
            setNumber(number - 1);
        }
    };

    const current = testimonials[number];

    return (
        <section className="bg-color text-white py-5 ">
            <Container className="position-relative">
                {/* Left Arrow */}
                <Button
                    variant="link"
                    onClick={prevTestimonial}
                    className="position-absolute top-50"
                >
                    <Image 
                    src={arrowLeft} 
                    alt="Previous" 
                    width={30} />
                </Button>

                <Row className="align-items-center justify-content-center g-5 py-4">
                    <Col md="auto">
                        <Image
                            src={current.img}
                            alt={current.name}
                            roundedCircle
                            className="testimonial-img"
                        />
                    </Col>
                    <Col md={7}>
                        <blockquote className="fs-5 fw-light">{current.quote}</blockquote>
                        <p className="fw-bold mt-3 mb-1">{current.name}</p>
                        <p className="fst-italic">{current.role}</p>
                    </Col>
                </Row>

                {/* Right Arrow */}
                <Button
                    variant="link"
                    onClick={nextTestimonial}
                    className="position-absolute end-0 top-50"
                >
                    <Image 
                    src={arrowRight} 
                    alt="Next" 
                    width={30} />
                </Button>
            </Container>
        </section>
    );
};

export default Testimonial;
