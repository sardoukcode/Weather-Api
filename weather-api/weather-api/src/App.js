import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Navbar">
        <div className="Input-button-container">
          <div className="location-input">
            <input type={"text"} />
          </div>
          <div>
            <button type="submit">Find Weather</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
