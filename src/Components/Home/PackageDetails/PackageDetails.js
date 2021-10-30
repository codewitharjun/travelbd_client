import React, { useState, useEffect } from "react";
import { useParams } from 'react-router';
import './PackageDetails.css'



const PackageDetails = () => {
    const [details, setDetails] = useState([]);
    const {detailsId} = useParams(); 
    
    useEffect( () => {
        fetch(`http://localhost:5000/packages/${detailsId}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setDetails(data)
        });
    }, [])

    return (
        <div id="">
            <div>
                <img className="banner-img" src={details.bannerImg} alt="" />
            </div>
            <h4>This is Package of : {details.name}</h4>
        </div>
    );
};

export default PackageDetails;