import { Link } from "react-router-dom";

const AddressComponent = ({ addrData }) => {
  return (
    <div className="list-group">
      {
      addrData.map((address) => (
        <div key = {address.address} className="list-group-item">
          <p>Address:
            <Link to={address.address}>{address.address}</Link>
          </p>
        </div>
      ))
      }
    </div>
  );
};

export default AddressComponent;
