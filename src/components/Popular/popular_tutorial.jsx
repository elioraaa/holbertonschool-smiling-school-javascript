import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";
import play from "../../images/play.png";
import starColor from "../../images/star_on.png";
import starGray from "../../images/star_off.png";
import arrowLeft from "../../images/arrow_black_left.png";
import arrowRight from "../../images/arrow_black_right.png";
import './popular_tutorial.css';
import { useState } from "react";
import tutorials from "../db/slider.jsx";


const renderStars = (count) => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
        let starImage;
        // filled or empty
        if (i < count) {
            // filled star 
            starImage = starColor;
        } else {
            //  empty star
            starImage = starGray;
        }
        // Add the star image the array
        stars.push(
            <Image
                src={starImage}
                width={20}   
                height={20} 
                className="me-2" 
            />
        );
    }
    return stars;
};

const PopularTutorials = () => {
    const [startIndex, setStartIndex] = useState(0);
    const cardsToShow = 4;

    const next = () => {
        if (startIndex + cardsToShow < tutorials.length) {
            setStartIndex(startIndex + 1);
        }
    };

    const prev = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };

    const visibleTutorials = tutorials.slice(startIndex, startIndex + cardsToShow);

    return (
        <section className="py-5 position-relative">
            <Container>
                <h1 className="text-center fs-2 py-5 mb-5 fw-light">
                    Most <span className="fw-bold txt-learn">popular</span> tutorials
                </h1>

                <div className="d-flex align-items-center position-relative">
                    {/* Left arrow */}
                    <Button
                        variant="link"
                        onClick={prev}
                        className="me-2"
                    >
                        <Image src={arrowLeft} alt="Previous" width={30} />
                    </Button>

                    {/* Cards */}
                    <Row xs={1} md={2}  className="g-4" >
                        {visibleTutorials.map((tutorial) => (
                            <Col md={3} >
                                <Card className="bg-white shadow-sm">
                                    <div className="position-relative overflow-hidden rounded-top">
                                        <Image
                                            src={play}
                                            alt="Play"
                                            width={50}
                                            height={50}
                                            className="position-absolute top-50 start-50 translate-middle"
                                        />
                                        <Image src={tutorial.thumb} alt={tutorial.title} className="w-100" />
                                    </div>
                                    <Card.Body>
                                        <Card.Title className="fw-bold">{tutorial.title}</Card.Title>
                                        <Card.Text className=" card-text text-muted">{tutorial.text}</Card.Text>
                                        <div className="d-flex align-items-center gap-2 mb-3">
                                            <Image 
                                            src={tutorial.authorPic} 
                                            roundedCircle 
                                            width={30} 
                                            height={30} />
                                            <span className=" card-text fw-bold text-purple">{tutorial.author}</span>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div >{renderStars(tutorial.stars)}</div>
                                            <span className=" card-text text-purple fw-bold">{tutorial.duration}</span>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>

                    {/* Right arrow */}
                    <Button
                        variant="link"
                        onClick={next}
                        className="ms-2"
                    >
                        <Image 
                        src={arrowRight} 
                        alt="Next" 
                        width={30} />
                    </Button>
                </div>
            </Container>
        </section>

    );
};

export default PopularTutorials;