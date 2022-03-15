import { BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
