import React from "react";
import BitcoinImg from "../assets/images/bitcoin.png";


export function Card() {

    const container = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
    

    const card = {
        transformStyle: 'preserve-3d',
        minHeight: '80vh',
        width: '35rem',
        borderRadius: '30px',
        padding: '0rem 5rem',
        boxShadow: '0 20px 20px rgba(0, 0, 0, 0.2), 0px 0px 50px rgba(0, 0, 0, 0.2)',
    }

    const heart = {
        minHeight: '35vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }

    const bitcoinImg = {
        width: '10rem',
        zIndex: 2,
        transition: 'all 0.75s ease - out',
    }

    const circle = {
        width: '15rem',
        height: '15rem',
        backgroundImage: 'linear-gradient(to right, rgba(245, 70, 66, 0.75), rgba(8, 83, 156, 0.75))',
        position: 'absolute',
        borderRadius: '50%',
        zIndex: '1',
    }

    const info = {
        fontSize: '3rem',
        textAlign: 'center',
        transition: 'all 0.75s ease - out',
    }

    const title = {
        padding: '2rem 0rem',
        color: '#585858',
        fontWeight: 'lighter',
        textAlign: 'center',
        transition: 'all 0.75s ease - out',
    };

    return (

            <div style={container}>
                <div style={card}>
                    <div style={heart}>
                        <div style={circle} />
                    <img src={BitcoinImg} style={bitcoinImg} alt="heart" />
                    </div>
                    <div style={info}>
                        <h3 style={title}>“Just Bougth It.” !! BITCOIN !!</h3>
                        <div class="love-btn">
                      
                    
                     

                        </div>
                    </div>
                </div>
            </div>

    )
}

