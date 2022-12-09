import React from "react";

export default function Card(props){
    
    return(
        <div className="card">
            {props.available===0 && <div className="card-bedge" >SOLD OUT</div>}
            <img src={props.cardimg} alt="img" className="card-image"/>
            <div className="card-stats">
                <img src="./images/star.png"/>
                <span >{props.reviews.ratings}</span>
                <span  className="grey">({props.reviews.reviewscount})</span>
                <span className="grey"> {props.location}</span>
                 </div>
            <p> {props.title}</p>
            <p><b>From ${props.price} </b>/ person</p>
        </div>
    )
}
{/* <div className="card">
            <img src={img1} alt="img" className="card-image"/>
            <div className="card-stats">
                <img src={star} />
                <span >5.0</span>
                <span  className="grey">(6)</span>
                <span className="grey">USA</span>
                 </div>
            <p> Life Lessons with kattie zaferes</p>
            <p><b> From $135 </b>/  Person</p>
        </div> */}