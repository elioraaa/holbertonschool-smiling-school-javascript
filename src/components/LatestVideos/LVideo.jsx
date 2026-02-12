import { Container, Row, Col, Card, Image } from "react-bootstrap";
import play from "../../images/play.png";
import starColor from "../../images/star_on.png";
import starGray from "../../images/star_off.png";
import './LVideo.css';
import PopularVideos from "../db/popular.jsx";


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

const LatestVideos = () => {

    return (
        <section className="py-5 position-relative">
            <Container>
                <h1 className="text-center fs-2 py-5 mb-5 fw-light">
                    <span className="fw-bold txt-learn">Latest</span> videos
                </h1>

                <div className="d-flex align-items-center position-relative">
                    {/* Cards */}
                    <Row className="g-4" >
                        {PopularVideos.map((PopularVideo) => (
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
                                        src={PopularVideo.thumb} 
                                        alt={PopularVideo.title} 
                                        className="w-100" />
                                    </div>
                                    <Card.Body>
                                        <Card.Title className="fw-bold">{PopularVideo.title}</Card.Title>
                                        <Card.Text className="text-muted">{PopularVideo.text}</Card.Text>
                                        <div className="d-flex align-items-center gap-2 mb-3">
                                            <Image
                                                src={PopularVideo.authorPic}
                                                roundedCircle
                                                width={30}
                                                height={30} />
                                            <span className="fw-bold text-purple">{PopularVideo.author}</span>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div>{renderStars(PopularVideo.stars)}</div>
                                            <span className="text-purple fw-bold">{PopularVideo.duration}</span>
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

export default LatestVideos;