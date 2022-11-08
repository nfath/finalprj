import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavigationBar />}>
            <Route path="" element={} />
            <Route path="" element={} />
            <Route path="" element={} />
            <Route path="*" element={<NoPage />} />
          </Route>

      </Routes>
    </div>
  );
}

export default App;
