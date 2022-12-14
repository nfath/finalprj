import './App.css';
import {Routes, Route} from "react-router-dom";
import Navigation from "./pages/Navigation";
import NoPage from "./pages/NoPage";
import Wallet from './pages/Wallet';
import Addresses from './pages/Addresses';
import Transaction from './pages/Transaction';
import Transfer from './pages/Transfer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />}>
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/addresses" element={<Addresses />} />
        <Route path="/transactions" element={<Transaction />} />
        <Route path="/addresses/:hashAddr" element={<Transfer />} />
        <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
