import React from "react";
import { MDBContainer } from "mdbreact";
import "./scrollbar.css";
import CardDetails from "./CardDetails";

const Card = () => {
    const scrollContainerStyle = { maxWidth: "500px", maxHeight: "600px" , "background-color": "rgba(139, 139, 139, 0.462)" , "border-radius":"10px" };
    return (
        <MDBContainer>
            <h3>Recommended</h3>
            <div className="scrollbar scrollbar-primary" style={scrollContainerStyle}>
                {
                    CardDetails.map((card) => {
                        console.log(card.id);
                        return (
                            <div className="card" style={{"display":"block" , "margin":"5px" , "border-radius":"5px"}} key={card.id}>
                                <img src={card.image} alt="Card cap" height="190px" width="190px" style={{"float":"right" , "textAlign":"right"}}/>
                                <div class="card-body">
                                    <h5 className="card-title">{card.title}</h5>
                                    <p className="card-text">{card.content}</p>
                                    <a href="/" className="btn btn-primary">{card.buttonText}</a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </MDBContainer>
    );
}
export default Card;