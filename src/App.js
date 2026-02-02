import './App.css';
import { Routes, Route } from 'react-router-dom';
import { MainPage } from './components/MainPage/MainPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage></MainPage>} />
    </Routes>
  );
}

export default App;
