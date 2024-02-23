import Navbar from "./navbar";
import Home from "./Home";
// root component
function App() {
  const likes = 50;

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        <p>Likes: {likes}</p>
      </div>
    </div>
  );
}

export default App;
