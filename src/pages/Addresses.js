import AddressComponent from "../components/AddressComponent";

const addrData = [
  { id: "0", address: "Oxf39Fd6e51aad88F6F4ce5aB8827279cffb922662" },
  { id: "1", address: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8" },
  { id: "2", address: "Ox3C44CdDdB6a900fa2b585dd299e03d12FA4293BC" },
  { id: "3", address: "Ox90F79bf6EB2c4f870365E785982E1f101E93b906" },
  { id: "4", address: "Ox15d34AAf54267DB7D7C367839AAF71A00a2C6A65" }
];

const Addresses = () => {
  return (
    <div>
      <h1>Blockchain Addresses</h1>
      <AddressComponent addrData={addrData} className="list-group" />
    </div>
  );
};

export default Addresses;
