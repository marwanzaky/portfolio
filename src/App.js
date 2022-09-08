import Header from "./sections/Header";
import Services from "./sections/Services";
import Portfolio from "./sections/Portfolio";
import OpenSource from "./sections/OpenSource";
import Footer from "./sections/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Services />
      <Portfolio />
      <OpenSource />
      <Footer />
    </div>
  );
}

export default App;
