import { createContext, PropsWithChildren, useState } from "react";

import {ethers} from 'ethers';
import BuidlDAO from '../../abi/BuidlDAO.json'
import { Project } from "../../interface";
declare global {
    interface Window { ethereum: any }
  }

export interface IAppContext {
  connectedUser: string,
  setConnectedUser: (a: string) => void,
  connectWallet: () => Promise<string>,
  getNetworkId: () => any,
  upload: (title: string, data: string) => Promise<void>,
  upvote: (id: number) => Promise<void>,
  getProjects: () => Promise<Project[]>,
  getProject: (id: number) => Promise<any>,
  getProjectUpvotes: (id: number) => Promise<string[]>,
  loading: boolean,
  verify: (id: number) => Promise<any>

}


export const AppContext = createContext<IAppContext | null>(null);

const AppProvider = ({children} : PropsWithChildren) => {
  const [connectedUser, setConnectedUser] = useState("");
  const [loading, setLoading] = useState(false);
  const contractAddress = "0x95A5b67Eb8d0c2cb222EF25593582e8dBc46d2e7";

  const connectWallet = async () => {
      try {
        setLoading(true);
        const {ethereum} = window;
        if(!ethereum ) {
          throw new Error("Metamask not installed");
        }
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });

        if(accounts.length!== 0) {
          const account = accounts[0];
          setConnectedUser(account)
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
      console.log(title,data )
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const connectedContract = new ethers.Contract(contractAddress, BuidlDAO.abi, signer);
      await connectedContract.upload(title, data);
       
    }catch(err) {
      console.error(err)
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
      await connectedContract.upvote(id);
       
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


  const verify = async (id: number) => {
    try {
      const {ethereum} = window;
      if(!ethereum) {
        throw new Error("Metamask not installed");
      }
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
         
      const connectedContract = new ethers.Contract(contractAddress, BuidlDAO.abi, signer);
      return (await connectedContract.verify(id)); 
    }catch(err) {

    }
  }
  return (<AppContext.Provider
    value={{
      connectedUser,
      setConnectedUser,
      loading,
      connectWallet,
      getProjectUpvotes,
      getProject,
      upload,
      upvote,
      getNetworkId,
      getProjects,
      verify
    }}>
      <>{children}</>
      </AppContext.Provider>)
}

export default AppProvider