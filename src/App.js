import React from 'react';
import {
  Paper,
  PaperFold,
  HeaderStrip,
  Icon,
  TextWithSubText,
  OnOff,
  Table,
  Button
} from "./components/index.js";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Paper
        title="Blakio"
        color="red"
      >
        <Table />
        {/* <Button
          icon="far fa-bookmark"
          text="Button"
        /> */}
      </Paper>
    </div>
  );
}

export default App;
