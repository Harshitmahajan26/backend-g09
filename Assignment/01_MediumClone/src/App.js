import SignIn from './components/SignIn';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SignIn/>
      
      <Footer/>
    </div>
  );
}

export default App;
