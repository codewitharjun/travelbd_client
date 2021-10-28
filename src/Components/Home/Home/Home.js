import React from "react";
import NavCarousel from "../NavCarousel/NavCarousel";
import Package from "../Package/Package";
import Packages from "../Packages/Packages";

const Home = () => {
    return (
        <div>
            <Packages></Packages>
            <Package></Package>
            <NavCarousel></NavCarousel>
        </div>
    );
};

export default Home;