import logo from './logo.svg';
import './App.css';
import { RuxProgress } from '@astrouxds/react'
import Header from './components/header'
import Cards from './components/cards'

function App() {
  return (
    <div className="App">
      <div>
        <Header/>
            {/* <RuxProgress /> */}
            <Cards/>
        </div>
 
    </div>
  );
}

export default App;
