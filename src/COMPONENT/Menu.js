import React from "react";
import { GiSelfLove } from 'react-icons/gi';
import { Container } from 'react-bootstrap';
import "./Menu.css"

export default function Menu(){
    const Datas = [
        {
            id : 1,
            list: "HOME"
        },
        {
            id : 2,
            list: "COUPLE"
        },
        {
            id : 3,
            list: "STORY"
        },
        {
            id : 4,
            list: "GALLERY"
        },
        {
            id : 5,
            list: "EVENTS"
        },
        {
            id : 6,
            list: "WISHES"
        },
        {
            id : 7,
            list: "RSVP"
        },
        {
            id : 8,
            list: "BLOG"
        },
    ]

    return(
        <div className="menu">
            <Container>
                <div className="menu__inner d-flex justify-content-between align-items-center">
                    <div className="logo">
                        <a href="#">R<GiSelfLove />J</a>
                    </div>
                    <ul className="d-flex align-items-center">
                        {Datas.map((data, index)=>{
                            return<li key={index}>
                                {data.list}
                            </li>
                            
                        })}
                    </ul>
                </div>
            </Container>
        </div>
    )
}