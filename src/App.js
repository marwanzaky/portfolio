import Header from "./sections/Header";
import Services from "./sections/Services";
import Portfolio from "./sections/Portfolio";
import OpenSource from "./sections/OpenSource";
import Contact from "./sections/Contact";
import Timelines from "./sections/Timelines";
import Footer from "./sections/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Services />
      <Portfolio />
      <OpenSource />
      <Timelines />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
