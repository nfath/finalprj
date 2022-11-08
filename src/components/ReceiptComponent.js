import React, { useState, useEffect } from "react";

const ReceiptComponent = ({ dataReceipt }) => {
  const newDataReceipt = {
    trxHash: "",
    blockHash: "",
    blockNumber: "",
    from: "",
    to: "",
    gasUsed: "",
  };

  return (
    <div className="transaction-container">
      <p>Transaction Hash: {dataReceipt.txHash}</p>
      <p>Block Hash: {dataReceipt.blockHash}</p>
      <p>Block Number: {dataReceipt.blockNumber}</p>
      <p>From: {dataReceipt.from}</p>
      <p>To: {dataReceipt.to}</p>
      <p>Amount : {dataReceipt.amount}</p>
      <p>Gas Used: {dataReceipt.gasUsed}</p>
    </div>
  );
};

export default ReceiptComponent;
