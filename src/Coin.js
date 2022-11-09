import React from 'react';

const Coin = (props) => {
    const {name, image, symbol, current_price} = props
    return (
        <div style={{display: "flex", justifyContent:"space-around", alignItems:"center", width:"100%", marginBottom:"20px", borderBottom:"1px solid silver", padding:"10px" }}>
            <img src={image} style={{width:"70px"}} alt='fgg' />
            <span style={{width:"100px", textAlign:"left"}}>{name}</span>
            <span style={{width:"100px"}}>{symbol}</span>
            <span style={{width:"100px"}}>{current_price}</span>
        </div>
    );
};

export default Coin;