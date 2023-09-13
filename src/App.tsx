import React, { useContext, useState, useEffect } from 'react';
import './App.css';
import { Button, Toast, ToastContainer } from 'react-bootstrap';
import ReadOut from './ReadOut';
import { ReadoutContext, ReadoutContextType } from './readoutContext';

function App() {
  const { active, changeActive } = useContext(ReadoutContext) as ReadoutContextType
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (active) setShowToast(true)
  }, [active])

  return (
    <>
      <div className="App container border shadow p-3 mt-3">

        <Button variant="success" onClick={changeActive}>
          {
            active ? 'Turn Off Text to Speech' : 'Turn On Text to Speech'
          }
        </Button>

        <ReadOut text="Says hello world" as="h1" className="classcheck">hello world</ReadOut>

        <ReadOut text="click this button to say hello">
          <Button onClick={() => console.log("Clicked the btn")}>Click me</Button>
        </ReadOut>
      </div>
      <ToastContainer position='middle-center'>
        <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
          <Toast.Body>Text to Speech is active now! Hover on the text in the application to hear.</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
}

export default App;
