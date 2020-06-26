import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import ClockIn from "./timesheet/ClockIn";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/clockin" component={ClockIn} />
      </Router>
    </div>
  );
}

export default App;
