import "./App.css";

function App() {
  const data = {
    url: "https://rdtungul.github.io/",
  };
  const Header = () => {
    return (
      <div>
        <h1>Roseph Darl</h1>
        <a href={data.url} target="_blank">
          Link to my portfolio
        </a>
      </div>
    );
  };
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
