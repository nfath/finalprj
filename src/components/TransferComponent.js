import ReceiptComponent from "./ReceiptComponent";
import React, { useState, useEffect } from "react";

const TransferComponent = ({ dataTransfer }) => {
  const [amountValue, setAmountValue] = useState("");
  const [dataReceipt, setDataReceipt] = useState(null);
  const { from, to } = dataTransfer;

  const handleSubmit = (event) => {
    event.preventDefault();
    const newDataReceipt = {
      trxHash: "0x2767aabb9215f11f8ddc25cb0d43355632b8fe0f3a878cc5bda58763b739b6f5",
      blockHash: "0x506f776572656420627920626c6f58726f757465",
      blockNumber: "10",
      from: from,
      to: to,
      amount: amountValue,
      gasUsed: "21000",
    };

    setDataReceipt(newDataReceipt);
  };

  const handleChange = (event) => {
    setAmountValue(event.target.value);
  };

  return (
    <div>
      <div className="transaction-container">
        <p>From: {from}</p>
        <p>To: {to}</p>
        <form onSubmit={handleSubmit}>
          <label>Amount:</label>
          <input
            required
            type = "number"
            name = "amount"
            value = {amountValue}
            onChange = {handleChange}
          />
          <br />
          <br />
          <button type="submit" className="btn btn-info">Transfer</button>
        </form>
      </div>
      {dataReceipt ? <ReceiptComponent dataReceipt={dataReceipt} /> : <div></div>}
    </div>
  );
};

export default TransferComponent;
