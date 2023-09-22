import "./App.css";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Project from "./Components/ProjectFolder/Project";

function App() {
  return <div className="App">
     <Navbar/>
     <Hero />
     <Project />
     <Contact />
     <Footer />
     </div>;
}

export default App;
