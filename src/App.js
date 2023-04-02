import './App.css';
import { BrowserRouter as Main, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import NavbarSecondary from './components/NavbarSecondary';
import FooterMainContent from './components/FooterMainContent';
import AppHome from './components/AppHome';

function App() {
  return (
    <Main>
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <NavbarSecondary/>
      </header>

      <main className="bg-light">
        <Routes>
          <Route path='/' element={<AppHome/>}></Route>
        </Routes>
      </main>

      <footer className="App-footer">
        <FooterMainContent/>
      </footer>
    </div>
    </Main>
  );
}

export default App;
