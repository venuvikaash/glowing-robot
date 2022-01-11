import React from "react";
import Accesories from "./components/accesories";
import Styles from './components/style'
import './App.scss';
import Design from './components/design';
import Ears from "./components/functions/ears";

function App() {
  return (
    <div className="container">
      <div className="d-flex flex-row justify-content-center">
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
