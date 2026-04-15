const express = require("express");
const { ethers } = require("ethers");
require("dotenv").config();

const app = express();
const PORT = 3000;


const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
//const provider = new ethers.JsonRpcProvider("https://rpc.sepolia.org");


const contractAddress = "0x779877A7B0D9E8603169DdbD7836e478b4624789";

const abi = [
  "function name() view returns (string)",
  "function totalSupply() view returns (uint256)",
  "function decimals() view returns (uint8)"
];

const contract = new ethers.Contract(contractAddress, abi, provider);

app.get("/rajeevApiTest", async (req, res) => {
  try {
    
    const tokenName = await contract.name();
    const totalSupply = await contract.totalSupply();
    const decimals = await contract.decimals();

   
    const formattedSupply = ethers.formatUnits(totalSupply, decimals);

    
    console.log("Token Name:", tokenName);
    console.log("Total Supply:", formattedSupply);

    
    res.json({
      success: true,
      token: tokenName,
      totalSupply: formattedSupply
    });

  } catch (error) {
    console.error("Error fetching contract data:", error.message);

    res.status(500).json({
      success: false,
      error: "Failed to fetch contract data"
    });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});