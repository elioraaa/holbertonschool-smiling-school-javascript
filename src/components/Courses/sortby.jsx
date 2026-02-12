import { Container, Row, Col, Form, Dropdown, InputGroup } from "react-bootstrap";
import "./sortby.css";
import { Search } from 'react-bootstrap-icons';

const VideoFilter = () => {
    return (
        <section className="py-4 sort-by">
            <Container>
                <Row className="g-5 justify-content-center align-items-center">
                    <Col xs={12} sm={8} md={6} lg={4}>
                        <InputGroup>
                            <InputGroup.Text className=" filter-control bg-white border-end-0 filter-control">
                                <Search size={25} />
                            </InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder="Search by keywords"
                                className="border-start-0 filter-control"
                                size="lg"
                            />
                        </InputGroup>
                    </Col>


                    {/*  dropdown 1 */}
                    <Col xs={12} sm={8} md={6} lg={4}>
                        <Form.Select
                            className="filter-control  rounded"
                            size="lg"
                        >
                            <option>Novice</option>
                            <option>Intermediate</option>
                            <option>Expert</option>
                        </Form.Select>
                    </Col>

                    {/* dropdown 2 */}
                    <Col xs={12} sm={8} md={6} lg={4}>
                        <Form.Select
                            className="filter-control rounded"
                            size="lg"
                        >
                            <option>Most Popular</option>
                            <option>Most Recent</option>
                            <option>Most Viewed</option>
                        </Form.Select>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default VideoFilter;
