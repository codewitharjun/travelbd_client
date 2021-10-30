import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import Package from "../Package/Package";



const Packages = () => {
    const [packages, setPackages] = useState([]);
    
    useEffect( () => {
        fetch('http://localhost:5000/packages')
        .then(res => res.json())
        .then(data => setPackages(data));
    }, [])

    return (
        <div id="packages">
            <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        packages.map( pack => <Package key={pack._id} pack={pack}></Package>)
                    }
            </Row>
        </div>
    );
};

export default Packages;