import {
    EthereumClient,
    w3mConnectors,
    w3mProvider,
  } from "@web3modal/ethereum";
  import { Web3Modal, Web3Button, Web3NetworkSwitch } from "@web3modal/react";
  import React from "react";
  import {
    WagmiConfig,
    WagmiConfigProps,
    configureChains,
    createClient,
  } from "wagmi";
  import {
    bsc,
    polygon,
    arbitrum,
    bronos,
    goerli,
    mainnet,
    dogechain,
  } from "wagmi/chains";
  
  export default function connectWallet() {
    const projectID = "c5fba4b2fb0956256f7412b2b89833e5";
    const chains = [dogechain, arbitrum, polygon, bsc, bronos, goerli, mainnet];
    const { provider } = configureChains(chains, [w3mProvider({ projectID })]);
  
    const wagmiClient = createClient({
      autoConnect: true,
      connectors: w3mConnectors({ version: 1, chains, projectID }),
      provider,
    });
    const ethereumClient = new EthereumClient(wagmiClient, chains);
    return (
      <>
        <Web3NetworkSwitch />
        <br />
        <Web3Button />
        <br />
        <Web3Modal
          themeMode="dark"
          projectId={projectID}
          ethereumClient={ethereumClient}
        />
      </>
    );
  }
  