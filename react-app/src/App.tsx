import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";


function App(){
  const [alertVisible, setAlertVisiblity]= useState(false);

  return (
    <div >
      {alertVisible && <Alert onClose={() => setAlertVisiblity(false)}>My alert</Alert>}
      <Button onClick={()=> setAlertVisiblity(true)}>Hello </Button>
    </div>
  );
}

export default App;