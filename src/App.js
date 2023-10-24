import './App.css';
import Navbar from './Navbar';
import Card from './Card';

function App() {
  return (
    <div className="App bg-dark text-white">
      <Navbar />
      <h1>CS 230L</h1>
      <h2>Section-02</h2>
      <p>WVU ID: 800391317</p>
      <p>Hi, I am Visnu.</p>
      <Card /> <Card /> <Card />
    </div>
  );
}

export default App;
