import "./App.css";
import MainHeader from "./components/main_header/MainHeader";
import Navigation from "./components/navbar/Navigation";

function App() {
  return (
    <div className="App">
      <div className="app-navbar">
        <Navigation />
      </div>
      <div className="app-main-header">
        <MainHeader />
      </div>
    </div>
  );
}

export default App;
