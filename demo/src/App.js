import Confetti from 'confetti';
import './App.css';

function App() {
  return (
    <div className="App" style={{display: 'flex', width: '100%', height: '100%'}}>
      <div style={{position: 'relative', width: '50%', height: '100vh'}}>
        <Confetti Component={<span style={{width: '15px', height: '15px', display: 'block'}}>😍</span>} />  
      </div>
      <div style={{position: 'relative', width: '50%', height: '100vh'}}>
        <Confetti Component={<span style={{width: '15px', height: '15px', display: 'block'}}>💀</span>} />
      </div>
    </div>
  );
}

export default App;
