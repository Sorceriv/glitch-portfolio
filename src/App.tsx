import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import './App.scss';

import ShapesBackground from "./components/Others/ShapesBackground/ShapesBackground";

function App() {

  return (
    <>
      <ShapesBackground/>
      <div className="background-wrapper-1">
        <NavBar/>
        <Hero/>
      </div>
      {/*<div className="background-wrapper-2">*/}
        <Skills/>
      {/*</div>*/}
      {/*<div className="background-color-1">*/}
        <Projects/>
      {/*</div>*/}
    </>
    
  )
}

export default App
