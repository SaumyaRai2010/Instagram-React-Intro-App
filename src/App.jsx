import "./App.css";
import { useEffect } from "react";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  useEffect(() => {
    document.title = "Buy Saumya A Cake"
 }, [])

  return <div className="App">
    <NavBar />
    <Banner />
  </div>;
}

export default App;
