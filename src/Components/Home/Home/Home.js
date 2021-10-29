import React from "react";
import NavCarousel from "../NavCarousel/NavCarousel";
import Package from "../Package/Package";
import Packages from "../Packages/Packages";

const Home = () => {
    return (
        <div id="home">
            <NavCarousel></NavCarousel>
            <Packages></Packages>
            <Package></Package>
        </div>
    );
};

export default Home;