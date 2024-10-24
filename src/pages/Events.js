import React from "react";
import "../components/styles/events.css";
import WorkshopCarousel from "../components/WorkshopCarousel";
import CompCarousel from "../components/CompCarousel";

export default function Events() {

    return(
        <>
          
            
            <div className="Events-HeroBanner">

                
                <h1 data-text="Events">
                    Events
                </h1>
                <div className="HeroText">
                <p>With a rich tapestry of events and workshops, LITHIUM offers a unique platform for knowledge sharing, collaboration, and innovation. From coding competitions and design challenges to insightful talks and hands-on workshops, LITHIUM caters to a wide range of interests and skill levels. All events and workshops are open to school delegations and individuals participants. Register now to be a part of this exciting journey!</p>
            </div>
            </div>
            <div className="Events-Content">
                <div className="Workshops-container">
                    <h1 className="Container-title">
                        Workshops
                    </h1>
                    <div className="Carousel-container">
                    <WorkshopCarousel></WorkshopCarousel>
                    </div>
                   
                </div>
                <div className="Workshops-container">
                    <h1 className="Container-title">
                        Competitions
                    </h1>
                    <div className="Carousel-container">
                        <CompCarousel></CompCarousel>
                    </div>
                </div>

            </div>
        </>
    )
}