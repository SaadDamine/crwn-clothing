import './App.css';
import { HomePage } from './pages/homepage/HomePage.component';

import { Routes,Route } from 'react-router-dom';


const Test = () => (
  <div>this is Test page</div>
);

function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path='/' element={<HomePage />} />
        <Route  path='/test' element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
