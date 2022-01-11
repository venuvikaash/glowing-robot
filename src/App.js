import React from "react";
import Accesories from "./components/accesories";
import Styles from './components/style'
import './App.scss';
import Design from './components/design';

function App() {
  return (
    <div className="container">
      <div className="d-flex flex-row">
        <Design />
        <div className="d-flex flex-column mx-5">
            <Accesories />
            <Styles />
        </div>
      </div>
    </div>
  );
}

export default App;
