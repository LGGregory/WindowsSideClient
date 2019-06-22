import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Computers from './components/computers/Computers';
import Header from './components/header/Header';
import UserPage from './views/UserPage'
//import './App.css'

function Index() {
  return <h2>WindowsSide</h2>;
}

function App() {
  return (
    <Router>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
      <div>
        <Header />
      </div>
      <div className="centered">
        <Route path="/" exact component={Index} />
        <Route path="/login" component={UserPage} />
        <Route path="/computer" component={Computers} />
      </div>
    </Router>
  );
}

export default App;
