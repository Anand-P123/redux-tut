import logo from './logo.svg';
import './App.css';
//import User from './user.js'
import HomeContainer from './containers/HomeContainer'
function App() {
  return (
    <div className="App">
      {/* <User data={{name:'anand', age:30}}/> */}
      <HomeContainer />
    </div>
  );
}

export default App;
