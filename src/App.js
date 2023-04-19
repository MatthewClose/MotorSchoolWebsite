import "./App.css";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
// import Contact from "./components/Contact/Contact";
import Icons from "./components/Icons/Icons";
import Reasons from "./components/Reasons/Reasons";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <div className="App">
      <Hero />
      <Icons />
      <Reasons />
      <Testimonials />
      <About />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
