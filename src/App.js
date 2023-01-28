import "./App.css";
import Navbarr from "./components/navbar";
import Elements from "./components/elementsnavbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbarr>
          <Elements
            title="LOGO"
          />
          <Elements
            title="Home"
          />
          <Elements
            title="Quienes Somos"
          />
          <Elements
            title="Productos"
          />
          <Elements
            title="Carrito"
          />
        </Navbarr>
      </header>
    </div>
  );
}

export default App;
