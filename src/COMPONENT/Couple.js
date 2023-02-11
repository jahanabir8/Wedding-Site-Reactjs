import React from "react"
import { Container } from 'react-bootstrap';

import img1 from "../image/img4.jpg"
import img2 from "../image/img5.png"

export default function Couple(){
    const Couples = [
        {
            id : 1,
            img : img1,
            title: "THE GROOM",
            info1 : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis voluptatum fugiat necessitatibus impedit, nisi omnis.",
            info2 : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est cum necessitatibus quas autem debitis mollitia asperiores, aliquam amet veritatis! Exercitationem!",
            sig : "Romeo"
        },
        {
            id : 2,
            img : img2,
            title: "THE GROOM",
            info1 : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis voluptatum fugiat necessitatibus impedit, nisi omnis.",
            info2 : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est cum necessitatibus quas autem debitis mollitia asperiores, aliquam amet veritatis! Exercitationem!",
            sig : "Romeo"
        }
    ]

    return(
        <div className="couple__section">
            <Container>
                <div className="couple__inner">
                    <h2 className="title text-center">Know Us</h2>
                    <div className="couples">
                        {Couples.map((couple, index) =>{
                            const {img, title, info1, info2, sig} = couple
                            return <div className="couple d-flex align-items-center" key={index}>
                                    <div className="couple__left" style={{width:"50%"}}>
                                        <img style={{width: "100%"}} src={img} alt="img" />
                                    </div>
                                    <div className="couple__right" style={{width:"50%"}}>
                                        <h3>{title}</h3>
                                        <p>{info1}</p>
                                        <p>{info2}</p>
                                        <span>{sig}</span>
                                    </div>
                                </div>
                        })}
                    </div>
                </div>
            </Container>
        </div>
    )
}