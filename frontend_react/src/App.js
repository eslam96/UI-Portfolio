import "./App.scss";

import {
  About,
  Header,
  Footer,
  Work,
  Skills,
  Testimonials,
} from "./containers";

import { Navbar } from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
