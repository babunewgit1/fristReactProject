import Bannar from "./components/Bannar/Bannar";
import Fact from "./components/Fact/Fact";
import Feature from "./components/Feature/Feature";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Love from "./components/Love/Love";
import Sponser from "./components/Sponser/Sponser";
import Tour from "./components/Tour/Tour";

function App() {
  return (
    <div className="App">
      <Header />
      <Bannar />
      <Feature />
      <Love />
      <Fact />
      <Sponser />
      <Tour />
      <Footer />
    </div>
  );
}

export default App;
