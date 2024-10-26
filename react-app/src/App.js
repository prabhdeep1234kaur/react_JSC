import logo from './logo.svg';
import './App.css';

function App() {
  //const myName='PRabh';
  const handleNameChange = () =>{
    const names = ['Uoo', 'Tanya','Sam','Nelly'];
    const int = Math.floor(Math.random() * 4);
    return names[int];
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>Hello my name is {handleNameChange()}, Welcome</p> {/**  this is how we comment  */}
        
      </header>
      
    </div>
  );
}

export default App;
