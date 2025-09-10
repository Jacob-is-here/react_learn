import { useState } from "react";
import ListGroup from "./components/ListGroup";
import './App.css'

function App(){
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  return (
    <div>
      <ListGroup
        items={items}
        heading="City"
        onSelectItem={() => {}}
      />
    </div>
  );
}

export default App;