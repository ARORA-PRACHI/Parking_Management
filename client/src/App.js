import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import ParkingSpace from './components/ParkingSpace';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Signup/>                 
      <ParkingSpace/>     
      <Footer/>
    </div>
  );
}

export default App;
