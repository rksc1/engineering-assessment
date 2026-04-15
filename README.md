# BlockterraLab  Assessment

## Overview

This project demonstrates a simple API that interacts with a blockchain network using Ethers.js.

The objective was to create an endpoint that fetches on-chain data from a smart contract and returns it via an API.

---

## Implementation

* Created an API endpoint: `/rajeevApiTest`
* Connected to Sepolia network using a public RPC
* Interacted with an ERC20 smart contract
* Fetched:

  * Token name
  * Total supply
* Converted values into readable format
* Logged output in console and returned via API


---

## API Endpoint

GET /rajeevApiTest

Example:
http://localhost:3000/rajeevApiTest

---

## Sample Output

{
"success": true,
"token": "Token Name",
"totalSupply": "XXXXXXX"
}
