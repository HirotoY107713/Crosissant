import React,{useState} from 'react'
import './BuyCoin.css';
import LinearProgress from '@mui/material/LinearProgress';
const BuyCoin = (props) => {
    const [amount,setAmount] = useState(0);
    const handleClick = async () => {
        console.log("clicked",amount,props.addr);
        console.log(props.token);
        await props.token.transfer(props.addr,amount*10**18);
    }
  return (
    <div className="txn-outer">
    <div className='txn-box'>
        <h2 id="heading-ico">Crossiant Token ICO </h2>
        <h2 className="heading-data">Token price is : 0.01ETH</h2>
        <h2 className="heading-data">You currently have : {(props.userBal)/10**18} CRT</h2>
        <input type='number' placeholder='Enter no. of tokens' onChange={e => setAmount(e.target.value)}/>
        <button onClick={handleClick}>Buy CRO</button>
        <LinearProgress variant="determinate" value={45} />
        <h2 className="heading-data">{(props.ownerBal)/10**18} / 700000 CRT left</h2>
        <h2 className="heading-data">Your Address is : {props.addr}</h2>
        {/* <ProgressBar now={((((props.ownerBal)/10**18)/1000000)*100)} />
        <ProgressBar animated now={34}/>
        <CProgressBar color="warning" variant="striped" animated value={75}/> */}
    </div>
    <div className='bg-upper-ellipse'>
    </div>
    <div className='bg-middle-ellipse'>
    </div>
    </div>
  )
}

export default BuyCoin