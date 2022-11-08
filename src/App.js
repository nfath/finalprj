//import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Navigation from "./pages/Navigation";
import NoPage from "./pages/NoPage";
import Wallet from './pages/Wallet';
import Addresses from './pages/Addresses';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />}>
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/addresses" element={<Addresses />} />
        <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
