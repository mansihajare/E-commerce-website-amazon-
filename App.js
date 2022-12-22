import react from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CheckOut from "./components/CheckOut";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Routes>        
          <Route path="/" element={[<Home />]}></Route>
          <Route path="/checkout" element={[<CheckOut/>]}></Route>
          <Route path="/login" element={[<Login/>]}> </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
