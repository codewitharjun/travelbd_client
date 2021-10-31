import React, { useState, useEffect } from "react";
import { useParams } from 'react-router';
import './PackageDetails.css'



const PackageDetails = () => {
    const [details, setDetails] = useState([]);
    const {detailsId} = useParams(); 
    
    useEffect( () => {
        fetch(`https://tranquil-ridge-17570.herokuapp.com/packages/${detailsId}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setDetails(data)
        });
    }, [])

    return (
        <div >
            <div className="details-banner">
                <img className="banner-img" src={details.bannerImg} alt="" />
                <h1 className="banner-qunote">{details.qnote}</h1>
            </div>
            <h2 className="text-primary my-3">{details.name}</h2>
            <div className="price-btn my-3">
                <h4 className="text-danger">Price : ${details.price}</h4>
                <button>Add To Cart</button>
            </div>
            <h4 className="text-info">Duration : {details.days} days</h4>
            <p className="m-4">Details : {details.description}</p>
        </div>
    );
};

export default PackageDetails;