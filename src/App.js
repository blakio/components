import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import ClockIn from "./timesheet/ClockIn/index.js";
import TimeSummary from "./timesheet/TimeSummary/index.js";
import Loading from "./components/Loading";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/clockin" component={ClockIn} />
        <Route path="/timesummary" component={TimeSummary} />
        <Route path="/loading" component={Loading} />
      </Router>
    </div>
  );
}

export default App;
