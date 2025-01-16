import client from "@/lib/client";
import { defineChain, getContract } from "thirdweb";

// 1. Set up the network your smart contracts are deployed to.
// Define the Base network chain and set the NETWORK variable to the chain.
export const NETWORK = defineChain({
  id: 8453, // Base Chain ID (replace with the actual chain ID for Base if necessary)
  name: "Base", // Base Network name
  nativeCurrency: {
    name: "ETH",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://base-rpc.network"], // Base RPC URL (replace with the correct RPC URL if necessary)
    },
  },
  blockExplorers: {
    default: {
      name: "BaseScan", // Base's block explorer (adjust if necessary)
      url: "https://basescan.org", // Base's block explorer URL
    },
  },
  testnet: true, // Set to false if deploying on Mainnet
});

// 2. The address of the marketplace V3 smart contract.
// Replace with your actual Marketplace contract address on Base network.
const MARKETPLACE_ADDRESS = "0xcc85af4E1EFB3F8A378D20016020124917206E4b"; // Example address
export const MARKETPLACE = getContract({
  address: MARKETPLACE_ADDRESS,
  client,
  chain: NETWORK,
});

// 3. The address of your NFT collection smart contract on Base.
const NFT_COLLECTION_ADDRESS = "0x8F3b48431FA3d9b92ff7157E890105F9B5f96089"; // Replace with your NFT collection contract address
export const NFT_COLLECTION = getContract({
  address: NFT_COLLECTION_ADDRESS,
  client,
  chain: NETWORK,
});

// (Optional) Set up the URL of where users can view transactions on Base network.
export const ETHERSCAN_URL = "https://basescan.org"; // View transactions on BaseScan
