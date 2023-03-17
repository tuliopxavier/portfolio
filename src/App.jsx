import { Header } from "./components/Header";
import { Home } from "./components/Home";
// import { Works } from "./components/Works";
import { Footer } from "./components/Footer";
import "./global.scss";

function App() {
  return (
    <>
      <Header />
      <Home />
      {/* <Works /> */}
      <Footer/>
    </>
  );
}

export default App;
