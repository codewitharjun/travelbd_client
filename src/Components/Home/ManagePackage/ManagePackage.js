import React, { useState, useEffect } from "react";
import Manage from "../Manage/Manage";
import './ManagePackage.css';

const ManagePackage = () => {
    
    const [packages, setPackages] = useState([]);
    
    useEffect( () => {
        fetch('https://tranquil-ridge-17570.herokuapp.com/packages')
        .then(res => res.json())
        .then(data => setPackages(data));
    }, [])

    const handleDelete = id => {
        const url = `https://tranquil-ridge-17570.herokuapp.com/packages/${id}`
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount) {
                alert('Package Delete Successful')
            }
            const remaining = packages.filter( pack => pack._id !== id);
            setPackages(remaining);
        })
    }

    return (
        <div>
            <h2 className="mb-4">Manage Services</h2>
            <div  className="g-4">
                    {
                        packages.map( pack => <Manage 
                            key={pack._id} 
                            pack={pack} 
                            handleDelete={handleDelete}
                            ></Manage>)
                    }
            </div>
        </div>
    );
};

export default ManagePackage;