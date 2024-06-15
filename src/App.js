import CarouselEffect from "./Components/Header/Carousel/Carousel";
import "./App.css";
// import EskiLiyew from "./Components/Header/EskiLiyew";
import Header from "./Components/Header/Header";
// import Hh from "./Components/Header/Hh";
import Catagory from "./Components/Catagory/Catagory";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
       <CarouselEffect/>
       <Catagory />
         {/* <Hh/> */}
        {/* <EskiLiyew/> */}
      </header>
    </div>
  );
}

export default App;
