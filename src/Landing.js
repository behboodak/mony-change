import React, { useEffect, useState } from 'react';
import { getCoin } from './api';
import Coin from './Coin';
import loading from './Loading_icon.gif'

const Landing = () => {
    const [data, setData] = useState([])
    const [serach, setSearch] = useState("")
    

    useEffect(()=>{
        const fetchApi = async () =>{
            const coins = await getCoin()
            console.log(coins)
            setData(coins)
        }

        fetchApi();
    }, [])

    const searchHandler = (event) =>{
        setSearch(event.target.value)
    }

    const searcedCoins = data.filter(coin => coin.name.toLowerCase().includes(serach) )

    return (
        <div>
            {
                data.length ?
                
                    <div style={{margin:"10px 400px", textAlign:"center"}}>
                        <input type='text' placeholder='search'
                        style={{border:"none", textAlign:"center"}}
                        onChange={searchHandler} 
                        value={serach} />
                        {
                            searcedCoins.map(coin => <Coin key={coin.id} name={coin.name} current_price={coin.current_price} image={coin.image} symbol={coin.symbol} />)
                        }
                    </div>
                :   <div style={{display: "flex", justifyContent:"center", alignItems:"center", height:"100vh" }} >
                        <img  src={loading} />
                    </div>
            }
        </div>
    );
};

export default Landing;