import React from "react";
import { Button, Card, Col, Nav } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import './Package.css';

const Package = ({pack}) => {
    console.log(pack);
    const {_id,name, packImg, Days, details} = pack;
    return (
        <div>
            <Col  className="package">
                <Card>
                    <Card.Img variant="top" src={packImg} />
                    <Card.Body>
                        <Card.Text className="package">{Days}</Card.Text>
                        <Card.Title className="package">{name}</Card.Title>
                        <Card.Text className="package">{details}</Card.Text>
                        <div  className="package-btn">
                            <Nav.Link as={HashLink} to={`details/${_id}`}>
                            <Button variant="warning">Package Details</Button></Nav.Link>
                            <Button variant="warning">Add to Cart</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Package;