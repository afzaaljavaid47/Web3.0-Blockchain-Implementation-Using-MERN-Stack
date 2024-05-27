# Web3.0 Blockchain Implementation Using MERN Stack

###
![Web3.0 Blockchain Implementation Using MERN Stack](https://github.com/afzaaljavaid47/Web3.0-Blockchain-Implementation-Using-MERN-Stack/blob/master/Banner.PNG)
###

This project is a Web3 Blockchain application that allows users to transfer money between wallets and view wallet balances. It is built using the MERN stack (MongoDB, Express.js, React, Node.js) and Web3.js.

## Introduction

The Web3 Blockchain Wallet Application is a decentralized application (dApp) designed to facilitate secure and transparent money transfers on the blockchain. Leveraging the power of the MERN stack and Web3.js, this application provides a user-friendly interface for interacting with blockchain wallets, enabling users to send and receive funds as well as check their wallet balances.

## Abstract

The application aims to simplify blockchain interactions for users by providing a seamless interface for managing wallet transactions. It uses MongoDB for database management, Express.js for backend server functionality, React for the frontend interface, and Node.js for server-side operations. Web3.js is integrated to interact with the Ethereum blockchain, allowing for wallet balance queries and fund transfers.

## Features

- Transfer funds between wallets
- Check wallet balances
- Secure and transparent transactions
- User-friendly interface

## Tools and Technologies

- **MongoDB**: A NoSQL database for storing user and transaction data.
- **Express.js**: A web application framework for Node.js to build the backend server.
- **React**: A JavaScript library for building the user interface.
- **Node.js**: A JavaScript runtime for server-side development.
- **Web3.js**: A JavaScript library for interacting with the Ethereum blockchain.
- **Solidity**: (If applicable) Smart contract programming language for creating and deploying smart contracts on the Ethereum blockchain.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed
- MongoDB installed and running
- Metamask or any other Ethereum wallet installed in your browser

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/web3-blockchain-wallet.git
    ```
2. Navigate to the project directory:
    ```bash
    cd web3-blockchain-wallet
    ```
3. Install backend dependencies:
    ```bash
    cd backend
    npm install
    ```
4. Install frontend dependencies:
    ```bash
    cd ../frontend
    npm install
    ```

## Configuration

1. Backend:
    - Create a `.env` file in the `backend` directory with the following content:
      ```env
      PORT=5000
      MONGO_URI=your_mongodb_connection_string
      WEB3_PROVIDER_URL=your_infura_or_alchemy_url
      ```

2. Frontend:
    - Update the `frontend/src/config.js` file with your Web3 provider URL and other configurations as needed.

## Usage

1. Start the backend server:
    ```bash
    cd backend
    npm start
    ```
2. Start the frontend development server:
    ```bash
    cd ../frontend
    npm start
    ```
3. Open your browser and navigate to `http://localhost:3000`.

## How to Use

- **Transfer Funds**: Enter the recipient's wallet address and the amount to send, then confirm the transaction.
- **Check Balance**: Enter the wallet address and click the 'Check Balance' button to view the current balance.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request
