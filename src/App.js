import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Home from "./Components/Home";
import MyCart from "./Components/MyCart";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mycart" element={<MyCart />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
