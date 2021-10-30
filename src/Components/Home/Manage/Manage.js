import React from "react";
import { Button, Nav } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import './Manage.css';

const Manage = ({pack, handleDelete}) => {
    console.log(pack);
    const {_id, name, packImg} = pack;

    return (
        <div className="manage">
            <div className="manage-all">
                <div>
                    <img src={packImg} alt="" />
                    <h3 className="left-gap2">{name}</h3>
                </div>
                <div>
                    <Button onClick={() => handleDelete(_id)} variant="warning">Delete</Button>
                    <Nav.Link className="left-gap2" as={HashLink} to={'/home'}>
                        <Button variant="warning">Update Package</Button>
                    </Nav.Link>
                </div>
            </div>
        </div>
    );
};

export default Manage;