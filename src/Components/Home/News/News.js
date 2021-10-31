import React from "react";
import { Row } from "react-bootstrap";
import './News.css';


const News = () => {
    return (
        <div id="news" className="mx-2">
            <h2 className="my-4">Travelingg is important for mental growth and human happiness</h2>
            <Row xs={1} md={2} className="g-4">
                    <p className="news-para">
                        Traveling is important for humans. We are communal creatures that are all of the same species, yet our location determines societal actions based off cultured and governmental laws. We are so similar, yet our little worlds are so entirely different. Traveling to see places beyond our hometown is crucial to gain exposure to the world. Whether someone travels domestically or to a foreign country, it can be an experience that is reminisced for a lifetime. Foreign travels may require extra planning such as obtaining a visa. Even if it’s last minute and an individual has no schengen visa appointment, they should still reach out to places where they can obtain one. Traveling should be a happy thing, even if it is just a business trip to another state. It’s important to maintain a continual pattern of learning and awareness throughout one’s lifetime, and traveling is great way to do that. Traveling gives us exposure to other cultures. If an individual has remained in their home time for their entire life, it would make it hard to completely understand the struggles and celebrations of other regions and countries. One country can be vastly different from one side to the other. The dialects differ, food, local music, and the terrain can all be different from one place to another. There are different languages and ways of communicating all over the world. Exposure to these things allows us to become open-minded and understand that though we are different, it is our similarities as humans that brings us together. Traveling is great for global humanity.
                    </p>
                <img src="https://i.ibb.co/hgbX1xs/news.jpg" alt="" />
            </Row>
        </div>
    );
};

export default News;