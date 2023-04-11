import { ethers } from "ethers";
import { estio_contract_address, estio_abi } from "../../constants/constants";
import React, { useEffect, useContext, useState } from "react";
import Web3modal from "web3modal";

function Nameted() {
  
const [Maddress , setAddress] =useState("");
const createContract=(signer)=> {
console.log(estio_contract_address, estio_abi, signer);
new ethers.Contract(estio_contract_address, estio_abi, signer);
console.log(23424);
}
  const connectContract = async () => {
  
    const connection = await new Web3modal().connect();
  
    const provider = new ethers.providers.Web3Provider(connection);
    
    const signer = provider.getSigner();
    const address = await signer.getAddress();
    setAddress(address);
    const Txcount = await signer.getTransactionCount();
    const cID = await signer.getChainId();
    console.log(address);
    console.log(signer);
    console.log(Txcount);
    console.log(cID);
    const contract = createContract(signer);
    console.log(contract);
    return contract;
  };
  return (
    <div>
      <button onClick={() => connectContract()}> Connect </button><br/>
      {Maddress==null?"connect ":`${Maddress}`}
    </div>
  );
}

export { Nameted };
