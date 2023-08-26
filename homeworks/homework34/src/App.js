import './App.css';
import { Header } from './components/Header/'
import { Content } from './components/Content/'

function App() {

  return (
    <div className="App">
      <Header title={'React todo-list app'} text={'todo-list'}/>
      <Content title={'Your best todo-list'}/>
    </div>
  );
}

export default App;