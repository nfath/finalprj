import { Outlet, Link } from "react-router-dom";

const Navigation = () => {
    return (
      <div>
        <div className="navigation">
          <div className="nav-container">
            <Link className="nav-link" to="/transactions">Transactions</Link>
            <Link className="nav-link" to="/addresses">Addresses</Link>
            <Link className="nav-link" to="/wallet">Wallet</Link>
          </div>
        </div>
      </div>
    );
  };

export default Navigation;
