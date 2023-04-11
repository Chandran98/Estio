import { ethers } from "ethers";
import { estio_contract_address, estio_abi } from "../constants/constants";
import React,{ useEffect, useContext, useState } from "react";
import Web3modal from "web3modal";

function createContract(signer) {
  new ethers.Contract(estio_contract_address, estio_abi, signer);
}

export const connectContract = async () => {
  const connection = await new Web3modal().connect();
  const provider = new ethers.providers.Web3Provider(connection);
  const signer = provider.getSigner();
  const contract = createContract(signer);
  return contract;
};

// export const EstioContext = React.createContext();
// export const EstioProvider = ({ children }) => {
//   return <EstioContext.Provider value={{}}> {children}</EstioContext.Provider>;
// };
