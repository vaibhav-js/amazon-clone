import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  // BEM
  return (
    <Router>
      <div className="app">
      <Header />
        <Routes>
          <Route
            path="/checkout"
            element={
            <>
              <Checkout />
            </>
            }
          >
          </Route>
          <Route
            exact path="*"
            element={
            <>
              <Home />
            </>
          }
          >
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
