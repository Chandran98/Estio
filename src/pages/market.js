import React from 'react';
import { Contract, ethers } from 'ethers';
import {estio_contract_address,estio_abi} from "../../constants/constants.jsx";
import Web3modal from 'web3modal';

function market() {

const fetchContract= async ( signer)=>{  
    console.log(estio_contract_address,estio_abi,signer);
    new ethers.Contract(estio_contract_address,estio_abi,signer);

}

const ConnectWithContract = async()=>{
    const  web3modal = await new Web3modal().connect();
    https://eth-goerli.g.alchemy.com/v2/S8i2Qo9AWAtmAB17BQJCrY3ciLYbkCtA
    var provider= new ethers.providers.JsonRpcProvider("https://eth-goerli.g.alchemy.com/v2/S8i2Qo9AWAtmAB17BQJCrY3ciLYbkCtA");
    // const provider= new ethers.providers.Web3Provider(web3modal);
    const signer=  provider.getSigner();
    console.log(signer,"7866");
    const address = await signer.getAddress();
    console.log(address,7866);
    const contract = fetchContract(signer)
console.log();
}

  return (
    <div>
        
        <button onClick={()=>conectWithContract()}> connect wallet</button>
    </div>
  )
}

export default market