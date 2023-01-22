import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/Homepage/Homepage";
import About from "./pages/Homepage/About/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
    </div>
  );
}

export default App;
