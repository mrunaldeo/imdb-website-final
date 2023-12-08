//import logo from './logo.svg';
import './App.css';
import Ban_ner from './components/Ban_ner';
//import Banner from './components/Ban_ner';
import Movies from './components/Movies';
import Navbar from './components/Navbar';
import Wtachlist from './components/Watchlist';


function App() {
  return (
    //<div>I am launching movie app</div>
    <>
    <Navbar/>
    <Movies/>
    <Wtachlist/>
    <Ban_ner/>
   
    </>
    

  );
}

export default App;
