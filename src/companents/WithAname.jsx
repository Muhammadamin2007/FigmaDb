import React, { useState } from 'react';
import WithImg from "../img/img5.png"
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';

export default function WithAname() {

    const [open, setOpen] = useState('1');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-5">
                    <p>Lorem ipsum dolor</p>
                    <h1>With a name like Saas, it has to be good.</h1>

                   
                        <Accordion open={open} toggle={toggle}>
                            <AccordionItem>
                                <AccordionHeader targetId="1">Accordion Item 1</AccordionHeader>
                                <AccordionBody accordionId="1">
                                    <strong>This is the first item&#39;s accordion body.</strong>
                                    You can modify any of this with custom CSS or overriding our default
                                    variables. It&#39;s also worth noting that just about any HTML can
                                    go within the <code>.accordion-body</code>, though the transition
                                    does limit overflow.
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionHeader targetId="2">Accordion Item 2</AccordionHeader>
                                <AccordionBody accordionId="2">
                                    <strong>This is the second item&#39;s accordion body.</strong>
                                    You can modify any of this with custom CSS or overriding our default
                                    variables. It&#39;s also worth noting that just about any HTML can
                                    go within the <code>.accordion-body</code>, though the transition
                                    does limit overflow.
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionHeader targetId="3">Accordion Item 3</AccordionHeader>
                                <AccordionBody accordionId="3">
                                    <strong>This is the third item&#39;s accordion body.</strong>
                                    You can modify any of this with custom CSS or overriding our default
                                    variables. It&#39;s also worth noting that just about any HTML can
                                    go within the <code>.accordion-body</code>, though the transition
                                    does limit overflow.
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionHeader targetId="4">Accordion Item 4</AccordionHeader>
                                <AccordionBody accordionId="4">
                                    <strong>This is the third item&#39;s accordion body.</strong>
                                    You can modify any of this with custom CSS or overriding our default
                                    variables. It&#39;s also worth noting that just about any HTML can
                                    go within the <code>.accordion-body</code>, though the transition
                                    does limit overflow.
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionHeader targetId="5">Accordion Item 5</AccordionHeader>
                                <AccordionBody accordionId="5">
                                    <strong>This is the third item&#39;s accordion body.</strong>
                                    You can modify any of this with custom CSS or overriding our default
                                    variables. It&#39;s also worth noting that just about any HTML can
                                    go within the <code>.accordion-body</code>, though the transition
                                    does limit overflow.
                                </AccordionBody>
                            </AccordionItem>
                        </Accordion>
                  

                </div>
                <div className="col-7">
                    <img src={WithImg} style={{ width: "100%" }} alt="" />
                </div>
            </div>
        </div>
    )
}