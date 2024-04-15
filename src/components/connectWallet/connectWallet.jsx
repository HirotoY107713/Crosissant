import React from 'react'
import './connectWallet.css';

function ConnectWallet(props) {
  return (
    <div className="bg">
    <div className='modal-box'>
        <h2> Connect Your Wallet ! </h2>
    <button onClick={props.connectWallet}>Connect Wallet</button>
    <h3 id="error-txt">{props.errorMessage}</h3>


    </div>
    </div>
  )
}

export default ConnectWallet