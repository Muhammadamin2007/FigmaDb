import React from "react";
import TwoImg from "../img/img3.png"
import TwoImg2 from "../img/img4.png"


export default function TwoSaas () {
    return (
        <div className="container">
            <div className="twoImg mt-5 mb-5">
             <img src={TwoImg} style={{width:"100%"}} alt="" />
            </div>

            <div className="row">
                <div className="col-6">
             <img src={TwoImg2} style={{width:"100%"}} alt="" />

                </div>
                <div className="col-5">
                    <p className="loremP">Lorem ipsum dolor</p>

                    <h1 className="twoH1">Two Saas are better than one.</h1>

                    <p className="twoP">One of the most fundamental ways to go about that is to create a memorable e-commerce slogan.</p>

                    <p className="twoPs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    <p className="twoPs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    <p className="twoPs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                </div>
            </div>
        </div>
    )
}