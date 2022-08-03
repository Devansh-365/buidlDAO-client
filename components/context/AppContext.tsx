import { createContext, useState } from "react";

import {ethers} from 'ethers';
import BuidlDAO from '../../abi/BuidlDAO.json'
declare global {
    interface Window { ethereum: any }
  }

interface IAppContext {

}

export const AppContext = createContext<IAppContext | null>(null);

const AppProvier = ({children}) => {
  const [connected, setConnecteUser] = useState("");
  const [loading, setLoading] = useState(false);
  const contractAddress = "0x1d9Cf9104244B3Bf8864d10205A878263C9DC890";

  const connectWallet = async () => {
      try {
        setLoading(true);
        const {ethereum} = window;
        if(!ethereum ) {
          throw new Error("Metamask not installed");
        }
        const accounts = await ethereum.request({method: "eth_accounts"});
        if(accounts.length!== 0) {
          const account = accounts[0];
          return account;
        }else {
          throw new Error("No wallet is connected");
        }
      }catch(err) {
        return Promise.reject(err);
      }finally {
        setLoading(false);
      }
  }

  const getNetworkId =  () => {
    try {
      const { ethereum } = window;
  
      if (ethereum) {
       return ethereum.chainId;
  
      } else {
        throw new Error("Please install metamask")
      }
    } catch (err) {
      console.error(err);
      
    }
  }


  const upload = async (title: string, data: string) => {
    try {
      setLoading(true);
      const {ethereum} = window;
      if(!ethereum) {
        throw new Error("Metamask not installed");
      }
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
         
      const connectedContract = new ethers.Contract(contractAddress, BuidlDAO.abi, signer);
      return (await connectedContract.upload(title, data));
       
    }catch(err) {

    }finally {
      setLoading(false);
    }
  }


  const upvote = async (id: number) => {
    try {
      setLoading(true);
      const {ethereum} = window;
      if(!ethereum) {
        throw new Error("Metamask not installed");
      }
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
         
      const connectedContract = new ethers.Contract(contractAddress, BuidlDAO.abi, signer);
      return (await connectedContract.upvote(id));
       
    }catch(err) {

    }finally {
      setLoading(false);
    }
  }

  const getProjects = async () => {
    try {
      setLoading(true);
      const {ethereum} = window;
      if(!ethereum) {
        throw new Error("Metamask not installed");
      }
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
         
      const connectedContract = new ethers.Contract(contractAddress, BuidlDAO.abi, signer);
      return (await connectedContract.getProjects());
       
    }catch(err) {

    }finally {
      setLoading(false);
    }
  }


  const getProject = async (id: number) => {
    try {
      setLoading(true);
      const {ethereum} = window;
      if(!ethereum) {
        throw new Error("Metamask not installed");
      }
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
         
      const connectedContract = new ethers.Contract(contractAddress, BuidlDAO.abi, signer);
      return (await connectedContract.getProject(id));
       
    }catch(err) {

    }finally {
      setLoading(false);
    }
  }

  const getProjectUpvotes =  async (id: number) => {
    try {
      setLoading(true);
      const {ethereum} = window;
      if(!ethereum) {
        throw new Error("Metamask not installed");
      }
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
         
      const connectedContract = new ethers.Contract(contractAddress, BuidlDAO.abi, signer);
      return (await connectedContract.getProjectUpVotes(id));
       
    }catch(err) {

    }finally {
      setLoading(false);
    }
}
