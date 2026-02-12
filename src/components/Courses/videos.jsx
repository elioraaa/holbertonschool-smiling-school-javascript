import { Container, Row, Col, Card, Image } from "react-bootstrap";
import play from "../../images/play.png";
import starColor from "../../images/star_on.png";
import starGray from "../../images/star_off.png";
import tutorials from "../db/slider";


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
        // Add the star image
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

const VideoPart = () => {

    return (
        <section className="py-5 position-relative">
            <Container className="py-4">
                <h5 className="mb-5 text-muted">{tutorials.length} videos</h5>
                <div className="d-flex align-items-center position-relative">
                    {/* Cards */}
                    <Row className="g-4" >
                        {tutorials.map((tutorial) => (
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
                                        <Image
                                            src={tutorial.thumb}
                                            alt={tutorial.title}
                                            className="w-100 h-100" />
                                    </div>
                                    <Card.Body>
                                        <Card.Title className="fw-bold">{tutorial.title}</Card.Title>
                                        <Card.Text className="text-muted">{tutorial.text}</Card.Text>
                                        <div className="d-flex align-items-center gap-2 mb-3">
                                            <Image
                                                src={tutorial.authorPic}
                                                roundedCircle
                                                width={30}
                                                height={30} />
                                            <span className="fw-bold text-purple">{tutorial.author}</span>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div>{renderStars(tutorial.stars)}</div>
                                            <span className="text-purple fw-bold">{tutorial.duration}</span>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
        </section>

    );
};

export default VideoPart;