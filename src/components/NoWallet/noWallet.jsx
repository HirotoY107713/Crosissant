import React from 'react'
import './noWallet.css'; 
function NoWallet() {
  return (
    <div className='black-bg'>
        <div className='main'>
            <h2> No Ethereum wallet was detected.</h2>
            <p>
                Please install{" "}
                <a
                href="http://metamask.io"
                target="_blank"
                rel="noopener noreferrer">
                MetaMask
                </a>.
            </p>
        </div>
    </div>
  );
}

export default NoWallet;