import { useState } from 'react';
import { ethers } from 'ethers';
import LiberProfileABI from './abis/LiberProfile.json';

const CONTRACT_ADDRESS = "0x123..."; // Endereço do contrato deployado

function App() {
  const [domain, setDomain] = useState("");
  const [userDomain, setUserDomain] = useState("");

  const connectWallet = async () => {
    if (window.ethereum) {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const provider = new ethers.BrowserProvider(window.ethereum);
      return provider.getSigner();
    }
  };

  const mintDomain = async () => {
    const signer = await connectWallet();
    const contract = new ethers.Contract(CONTRACT_ADDRESS, LiberProfileABI, signer);
    await contract.mintDomain(domain);
  };

  return (
    <div>
      <input 
        type="text" 
        value={domain} 
        onChange={(e) => setDomain(e.target.value)} 
        placeholder="Seu domínio (ex: alice.eth)" 
      />
      <button onClick={mintDomain}>Mint Domain</button>
      <p>Seu domínio: {userDomain}</p>
    </div>
  );
}

export default App;
