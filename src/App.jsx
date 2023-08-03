import "./App.css";
import { useEffect } from "react";
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  useEffect(() => {
    document.title = "Buy Saumya A Cake"
 }, [])

  return <div className="App">
    <NavBar />
  </div>;
}

export default App;
