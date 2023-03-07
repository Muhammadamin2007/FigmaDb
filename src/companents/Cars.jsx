import React, { useState, useEffect } from "react";
import { Card } from "reactstrap"
import { CardBody } from "reactstrap"
import { CardTitle } from "reactstrap"
import { CardSubtitle } from "reactstrap"
import { CardText } from "reactstrap"
import { Button } from "reactstrap"
import axios from "axios";




export default function Cars() {


    const [Cdata, setCData] = useState([])

    useEffect(() => {
        axios.get("http://localhost:4000/car")
            .then(res => setCData(res.data))
            .catch(err => console.log(err))

    }, [])

    return (
        <div className="container mt-5">
            <div className="row mt-5">

                {
                    Cdata.map(car => (
                        <div className="col" key={car.id}>
                            <Card style={{ width: '18rem' }} >
                                <img alt="Sample" src={car.image_thumb} />
                                <CardBody>
                                    <CardTitle tag="h5"></CardTitle>
                                    <CardSubtitle className="mb-2 text-muted" tag="h6">  Card subtitle</CardSubtitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card‘s content.</CardText>
                                  
                                </CardBody>
                            </Card>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

