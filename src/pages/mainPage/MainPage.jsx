import React, { useEffect,useState } from 'react';
import ContractAddress from "../../contracts/contract-address.json";
import TokenArtifacts from "../../contracts/CrossiantToken.json";
import { BuyCoin ,NoWallet,ConnectWallet} from '../../components';
import { BigNumber, ethers } from 'ethers';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
// require("dotenv").config();
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const MainPage = () => {
    const owner='0xAbDfaE994FBE4bA8b502b199Dee9d54Fd1aD941'
    const [open, setOpen] = useState(false);
    const [ownerBal, setOwnerBal] = useState(0);
    const [croToken, setCroToken] = useState(null);
    const [userBal, setUserBal] = useState(0);

    const handleClick = () => {
      setOpen(true);
    };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };
    var token,tokenData,oBal,uBal;
    useEffect(() => {
        if (window.ethereum) {
            window.ethereum.on('accountsChanged', function (accounts) {
                window.location.reload();
            });
            window.ethereum.on('chainChanged', function (chainId) {
                window.location.reload();
            });
        }
    }, [])
    
    const [networkError,setNetworkError]=useState("");
    const [currentAccount, setCurrentAccount] = useState("");
    const connectWallet= async () => { 
        const [ selectedAddress ] = await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log(selectedAddress);  
        initialiseEther();
        {console.log("CHECKING NETWORK",window.ethereum.networkVersion,typeof window.ethereum.networkVersion)}
        checkNetwork();
        console.log(token.balanceOf(selectedAddress));
        uBal=await token.balanceOf(selectedAddress);
        oBal=await token.balanceOf(token.owner());
        uBal=parseInt(uBal._hex,16);
        oBal=parseInt(oBal._hex,16);
        console.log("owner is ",token.owner())
        console.log("user balance is",uBal);
        console.log("owner balance is",oBal);
        setOwnerBal(oBal);
        setUserBal(uBal);
        console.log(uBal,oBal);
        setCurrentAccount(selectedAddress);
        tokenData = await  getTokenData(selectedAddress);
        console.log(token);
        setCroToken(await token);
        return selectedAddress;
    }
    const initialiseEther =() =>{
        let provider = new ethers.providers.Web3Provider(window.ethereum);
        token=new ethers.Contract(
            ContractAddress.Token,
            TokenArtifacts.abi,
            provider.getSigner(0)
            )
        }
    const checkNetwork = async () => {
        if (!(window.ethereum.networkVersion == "5")) {
            setNetworkError("Please connect to Goerli Test Network");
            console.log("Please connect to Goerli Test Network");
            setOpen(true);
            setCurrentAccount("");
            throw new Error("Please Connect to Goerli Test Network");
        }
            setNetworkError("");
    }
        
    const getTokenData = async (addr) => {
        const tname = await token.name(); 
        const tsymbol = await token.symbol();
        return [tname,tsymbol];
    }
    const transfer= async(addr,amt) =>{
        console.log(token);
        await token.functions.transfer(addr,amt);
        console.log(addr,amt);
        setUserBal(token.functions.balanceOf(addr));
    }

    if (window.ethereum === undefined){
        return <NoWallet/>
    } 
    else if (!currentAccount){
        return (
            <>
        <ConnectWallet connectWallet={connectWallet} open={open}  handleClick={handleClick} handleClose={handleClose}/>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            Change network to Goerli !
            </Alert>
        </Snackbar>
            </>);
    }
    else{
        return <BuyCoin addr={currentAccount} ownerBal={ownerBal} token={croToken} userBal={userBal} transfer={transfer}/>;
    }
}

export default MainPage;