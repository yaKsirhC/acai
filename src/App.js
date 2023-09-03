import './App.css';
import { setToogleSwitch } from './components/darktheme';
import Navbar from './components/navbar';
import LandingPage from './pages/landing';

function App() {
  
  return (
    <>
      <Navbar />
      <LandingPage />
    </>
  );
}

export default App;
