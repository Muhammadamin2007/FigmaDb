import React from "react";
import LoremImg from "../img/img2.png"


export default function LoremIpsum () {
    return(
        <div className="loremC mb-5 pt-5">
        <div className="container">
            <div className="row">
                <div className="col-6 mt-5">
                    <p className="loremP mt-5">Lorem ipsum dolor</p>
                    <h1 className="loremH1">Always the real thing, always Saas</h1>
                    <p className="LoremP2">And that number is growing every day. That means e-commerce is thriving.</p>
                    <button className="btn LoremBtn">Try for free</button>
                    <button className="btn LoremBtn">Try for free</button>
                    <p className="loremP3">There are some things money can’t buy. For everything else there’s ‘’MasterCard” is a good example. </p>
                </div>
                <div className="col-4">
                    <img src={LoremImg} alt="" style={{width:"100%",height: "688.4px"}}/>
                </div>
            </div>
        </div>
        </div>
    )
}