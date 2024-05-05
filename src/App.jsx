import About from "./Components/About";
import Banner from "./Components/Banner";
import Nav from "./Components/Nav";
import StarsCanvas from "./Components/canvas/Stars";
import Services from "./Components/Tech";
import Tech from "./Components/Tech";

const App = () => {
  return (
    <div className="bg-black">
      <StarsCanvas />
      <div className="relative z-0">
      <Nav/>
      </div>
     <Banner/>
     <About/>
     <Tech
     />
    </div>
  );
};

export default App;
