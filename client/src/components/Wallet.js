import React, { useState } from 'react'
// import '../styles/Wallet.css'

const Wallet = () => {
    const [balance,setBalance]=useState(0);
  return (
    <div>
        <div>
            <h1>Wallet</h1>
        </div>
        <div>
            <h3>Total Balance:{balance}</h3>
        </div>
        <div>
            <div>
                <button onClick={()=> setBalance(300)}>300</button>
                <button onClick={()=> setBalance(500)}>500</button>
                <button onClick={()=> setBalance(1000)}>1000</button> 
            </div>
        </div>
    </div>
  )
}

export default Wallet