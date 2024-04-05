import './App.css';
import Blog from './Blog'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Blog name="Harsh Shah" phone="+91 1234512345" email="myemail@email.org"/>
        <Blog name="Pushkar Kadam" phone="+91 5432154321" email="push.kar@pushing.com"/>
      </header>
    </div>
  );
}

export default App;
