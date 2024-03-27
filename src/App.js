import './App.css';
import SimpleTodos from './Component/SimpleTodos/SimpleTodos';
import AddTodos from './Component/AddTodos/AddTodos'
function App() {
 
  return (
    <div className="App">
      <h1>App</h1>
      <AddTodos />
      <SimpleTodos /> 
    </div>
  );
}

export default App;
