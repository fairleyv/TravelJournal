import React from "react";
import locationIcon from "../src/assets/locationIcon.png";

export default function Card (props) {
    return (
        <card>
            <img className="cardImg" src={props.imageUrl}/>
            <div className="cardInfo">
                <div className="locationContainer">
                    <img className="locationIcon" src={locationIcon}/>
                    <h4 className="locationName">{props.location}</h4>
                    <p className="locationLink"><a href={props.googleMapsUrl}>View on Google Maps</a></p>
                </div>
                <h2 className="cardTitle">{props.title}</h2>
                <p className="tripDate">{props.startDate} - {props.endDate}</p>
                <p className="locationDescription">{props.description}</p>
            </div>
        </card>
    )
}