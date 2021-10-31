import React from "react";
import { Card, Col } from "react-bootstrap";

const Bulleting = ({packg}) => {
    return (
        <div className="mx-2">
            <Col  className="package">
                <Card>
                    <Card.Img variant="top" src={packg.bannerImg} />
                    <Card.Body>
                        <Card.Title className="package"></Card.Title>
                        <Card.Text className="package">{packg.name}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Bulleting;