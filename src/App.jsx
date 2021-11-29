import { useRef } from "react";
// Styles
import "./App.css";

function App() {
  const imgRef = useRef();
  const canvasRef = useRef();

  return (
    <div className="App">
      <img
        src="https://images.pexels.com/photos/8356485/pexels-photo-8356485.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        alt="paisagem"
        width="940"
        height="650"
      />
      <canvas width="940" height="650" />
    </div>
  );
}

export default App;
