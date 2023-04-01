import './App.css';
import Navbar from './components/Navbar';
import NavbarSecondary from './components/NavbarSecondary';
import FooterMainContent from './components/FooterMainContent';
import logo from './images/logo.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar logo={logo} />
        <NavbarSecondary/>
      </header>
      <footer className="App-footer">
        <FooterMainContent/>
      </footer>
    </div>
  );
}

export default App;
