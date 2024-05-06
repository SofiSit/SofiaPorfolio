import About from "./Components/About";
import Banner from "./Components/Banner";
import Nav from "./Components/Nav";
import StarsCanvas from "./Components/canvas/Stars";
import Services from "./Components/Tech";
import Tech from "./Components/Tech";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
    <div className="bg-black ">
      <div className="relative z-0">
      <StarsCanvas />
      <Nav/>
      </div>
     <Banner/>
     <About/>
     <Tech/>
     <Projects/>
     <div className="relative z-0">
      <StarsCanvas />
      <Footer/>
      </div>
    </div>
   
  </>
  );
};

export default App;
