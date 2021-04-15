import React from "react";
import styled from "styled-components";


import BitcoinImg from "../assets/images/bitcoin.png";


export function Card() {

    const container = styled.div` 
        display: flex;
        justifyContent: center;
        alignItems: center;
    `;
    
    const card = styled.div` 
        transformStyle: preserve-3d;
        minHeight: 80vh;
        width: 35rem,
        borderRadius: 30px;
        padding: 0rem 5rem;
        boxShadow: 0 20px 20px rgba(0, 0, 0, 0.2), 0px 0px 50px rgba(0, 0, 0, 0.2);
    `;

    const heart = styled.div` 
        minHeight: 35vh;
        display: flex;
        alignItems: center;
        justifyContent: center;
    `;

    const bitcoinImg = styled.div` 
        width: 10rem;
        zIndex: 2;
        transition: all 0.75s ease - out;
    `;

    const circle = styled.div`
        width: 15rem;
        height: 15rem;
        backgroundImage: linear-gradient(to right, rgba(245, 70, 66, 0.75), rgba(8, 83, 156, 0.75));
        position: absolute;
        borderRadius: 50%;
        zIndex: 1;
    `;

    const info = styled.div` 
        fontSize: 3rem;
        textAlign: center;
        transition: all 0.75s ease - out;
    `;

    const title = styled.div` 
        padding: 2rem 0rem;
        color: #585858;
        fontWeight: lighter;
        textAlign: center;
        transition: all 0.75s ease - out;
    `;

    return (

            <container>
                <card>
                    <heart>
                        <circle></circle>
                    <img src={BitcoinImg} style={bitcoinImg} alt="bitcoin" />
                    </heart>
                    <div style={info}>
                        <h3 style={title}>“Just Bougth It.” !! BITCOIN !!</h3>
                        <div class="love-btn">
                        </div>
                    </div>
                </card>
            </container>

    )
}

