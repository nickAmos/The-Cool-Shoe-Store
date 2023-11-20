import './App.css';
import Header from './components/Header';
import ShoeDisplay from './components/ShoeDisplay';

function App() {
  return (
    <div className="App">
      <Header/>
      <ShoeDisplay/>
    </div>
  );
}

export default App;



/*
ShoeDisplay component should create a copy of the shoes array and map
its content to the screen.

The shoes array should be manipulated by a functional component which is
connected to the filter component.



*/