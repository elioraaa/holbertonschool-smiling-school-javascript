import { Container, Row, Col, Card, Image } from "react-bootstrap";
import play from "../../images/play.png";
import starColor from "../../images/star_on.png";
import starGray from "../../images/star_off.png";
import tutorials from "../db/slider";


const renderStars = (count) => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
        let starImage;

        if (i < count) {

            starImage = starColor;
        } else {

            starImage = starGray;
        }

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

const VideoPart = ({ filters = {} }) => {
    // Apply filters
    let filteredVideos = tutorials;

    // Filter by search
    if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        filteredVideos = filteredVideos.filter(
            (video) =>
                video.title.toLowerCase().includes(searchLower) ||
                video.text.toLowerCase().includes(searchLower) ||
                video.author.toLowerCase().includes(searchLower)
        );
    }

    // Filter by level
    if (filters.level && filters.level !== "All") {
        filteredVideos = filteredVideos.filter(
            (video) => video.level === filters.level
        );
    }

    // Sort videos
    if (filters.sort === "Most Recent") {
        filteredVideos = [...filteredVideos].reverse();
    } else if (filters.sort === "Most Viewed") {
        filteredVideos = [...filteredVideos].sort((a, b) => b.stars - a.stars);
    }
    // "Most Popular" is the default order

    return (
        <section className="py-5 position-relative">
            <Container className="py-4">
                <h5 className="mb-5 text-muted">{filteredVideos.length} videos</h5>
                <div className="d-flex align-items-center position-relative">

                    <Row className="g-4" >
                        {filteredVideos.map((tutorial, index) => (
                            <Col xs={12} sm={6} md={4} lg={3} key={index}>
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