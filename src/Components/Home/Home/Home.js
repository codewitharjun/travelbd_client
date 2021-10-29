import React from "react";
import NavCarousel from "../NavCarousel/NavCarousel";
import News from "../News/News";
import Packages from "../Packages/Packages";

const Home = () => {
    return (
        <div id="home">
            <NavCarousel></NavCarousel>
            <News></News>
            <Packages></Packages>
        </div>
    );
};

export default Home;