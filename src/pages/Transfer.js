import TransferComponent from "../components/TransferComponent";
import { useParams } from "react-router-dom";

const dataTransfer = {
  from: "0xf2f5c73fa04406b1995e397b55c24ab1f3ea726c",
  to: ""
};

const Transfer = () => {
  const { hashAddr } = useParams();
  dataTransfer.to = hashAddr;
  return (
    <div>
      <h1>Transfer</h1>
      <TransferComponent dataTransfer = {dataTransfer} />
    </div>
  );
};

export default Transfer;
