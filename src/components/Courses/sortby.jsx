import { Container, Row, Col, Form, Dropdown, InputGroup } from "react-bootstrap";
import "./sortby.css";
import { Search } from 'react-bootstrap-icons';

const VideoFilter = ({ filters, onFilterChange }) => {
    const handleSearchChange = (e) => {
        onFilterChange({ ...filters, search: e.target.value });
    };

    const handleLevelChange = (e) => {
        onFilterChange({ ...filters, level: e.target.value });
    };

    const handleSortChange = (e) => {
        onFilterChange({ ...filters, sort: e.target.value });
    };

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
                                value={filters.search}
                                onChange={handleSearchChange}
                            />
                        </InputGroup>
                    </Col>



                    <Col xs={12} sm={8} md={6} lg={4}>
                        <Form.Select
                            className="filter-control  rounded"
                            size="lg"
                            value={filters.level}
                            onChange={handleLevelChange}
                        >
                            <option>All</option>
                            <option>Novice</option>
                            <option>Intermediate</option>
                            <option>Expert</option>
                        </Form.Select>
                    </Col>


                    <Col xs={12} sm={8} md={6} lg={4}>
                        <Form.Select
                            className="filter-control rounded"
                            size="lg"
                            value={filters.sort}
                            onChange={handleSortChange}
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
