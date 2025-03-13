import React, { useState } from 'react'

const Contatore = () => {
    let contatore = useState(0);
    let diminuisci = () => {
        contatore[1](--contatore[0]);
        console.log(contatore[0]);
        
    }

    let aumenta = () => {
        contatore[1](++contatore[0]);
        console.log(contatore[0]);
    }




    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            textAlign: "center"
        }}>
            <h1>Contatore</h1>
            <h2>{contatore}</h2>
            <div>
                <button onClick={diminuisci} style={{ margin: "5px", padding: "10px 20px" }}>Diminuisci</button>
                <button onClick={aumenta} style={{ margin: "5px", padding: "10px 20px" }}>Aumenta</button>
            </div>
        </div>
    );
}

export default Contatore