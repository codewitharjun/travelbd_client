import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import Package from "../Package/Package";
import useAuth from "../../../Hooks/useAuth";
import Bulleting from "../Bulleting/Bulleting";
import './Packages.css';



const Packages = () => {
    const [packages, setPackages] = useState([]);
    // const [customer, setCustomer] = useState([]);
    const {user} = useAuth();
    
    useEffect( () => {
        fetch('https://tranquil-ridge-17570.herokuapp.com/packages')
        .then(res => res.json())
        .then(data => setPackages(data));
    }, []);

    // useEffect( () => {
    //     const url = `http://localhost:5000/customers/${user.email}`;
    //     console.log(url);
    //     fetch(url)
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // }, []);
    
    const addToCart = id => {
        if(!user.email) {
            alert('Plese log in first');
        }
        else {

            // if(!customer.email) {
            //     console.log('He is not  a customer', id);
            // }
            // else {
            //     console.log('He is  a customer');

            // }
        }
    }

    return (
        <div id="packages">
            <Row xs={1} md={2} className="g-4 w-100">
                <div className="bulleting-container">
                    {
                        packages.map( packg => <Bulleting 
                            key={packg._id} 
                            packg={packg} 
                        ></Bulleting>)
                    }
                </div>
                <Row xs={1} md={2} lg={3} className="package-container g-4">
                    {
                        packages.map( pack => <Package 
                            key={pack._id} 
                            pack={pack} 
                            addToCart={addToCart}
                        ></Package>)
                    }
                </Row>
            </Row>
        </div>
    );
};

export default Packages;