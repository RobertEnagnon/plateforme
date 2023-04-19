import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import './App.css';
import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';
import Tutoriel from './pages/tutoriel/Tutoriel'
import Training from './pages/training/Training';
import Premium from './pages/premium/Premium';
import Project from './pages/project/Project';

function App() {
  return (
    <Router>
      <Topbar/>
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/tutoriels' exact element={<Tutoriel/>} /> 
        <Route path='/formations' exact element={<Training/>} />
        <Route path='/premium' exact element={<Premium/>} />
        <Route path='/projets' exact element={<Project/>} />
      </Routes>
    </Router>
  );
}

export default App;
