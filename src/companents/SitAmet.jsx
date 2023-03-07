import React from "react";
import { CardGroup } from "reactstrap"
import { CardImg } from "reactstrap"
import { Card } from "reactstrap"

import SitImg from "../img/img6.png"



export default function SitAmet() {
    return (
        <div className="container">
            <p className="loremP">Lorem ipsum dolor sit amet</p>
            <h1 className="sitH1">The Loudest Noise Comes From The Electric Saas.</h1>
            <p className="sitp">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>

            <CardGroup>
                <Card>
                    <CardImg
                        alt="Card image cap"
                        src={SitImg}
                        top
                        width="100%"
                    />
                   
                </Card>
                <Card>
                    <CardImg
                        alt="Card image cap"
                        src={SitImg}
                        top
                        width="100%"
                    />
                   
                </Card>
                <Card>
                    <CardImg
                        alt="Card image cap"
                        src={SitImg}
                        top
                        width="100%"
                    />
                   
                </Card>
            </CardGroup>
            <CardGroup>
            <Card>
                    <CardImg
                        alt="Card image cap"
                        src={SitImg}
                        top
                        width="100%"
                    />
                   
                </Card>
                <Card>
                    <CardImg
                        alt="Card image cap"
                        src={SitImg}
                        top
                        width="100%"
                    />
                   
                </Card>
                <Card>
                    <CardImg
                        alt="Card image cap"
                        src={SitImg}
                        top
                        width="100%"
                    />
                   
                </Card>
            </CardGroup>
        </div>
    )
}