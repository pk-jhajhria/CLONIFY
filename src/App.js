import "./App.css";
import "./Root.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Clonify from "./components/Clonify";
import Preloader from "./components/Preloader";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <>
      <BackToTop />
      <Preloader />
      <Clonify />
    </>
  );
}

export default App;
