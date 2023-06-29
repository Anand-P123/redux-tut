import logo from './logo.svg';
import './App.css';
import User from './user.js'
function App() {
  return (
    <div className="App">
      <User data={{name:'anand', age:30}}/>
    </div>
  );
}

export default App;
