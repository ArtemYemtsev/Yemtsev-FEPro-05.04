import './App.css';
import { Content } from './components/Content';
import { Header } from './components/Header';

function App() {
  return (
    <div className="App">
      <Header title={'React App'} text={'Best smile vote.'}/>
      <Content title={'Smile Vote'} text={'Click on smiles, cast your vote. And click button to give result.'}/>
    </div>
  );
}

export default App;
