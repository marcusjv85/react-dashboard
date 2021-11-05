import './App.css';
import {BrowserRouter as Router,Switch,Routes,Route,Link} from "react-router-dom";
import Nav from './components/Nav';
import Home from './components/Home';
import News from './components/News'
import Science from './components/Science'
import Sports from './components/Sports'


function App() {
  return (
    <div className="App">
      <Nav/>
        {/* <nav>
          <Link to="/">News</Link>
          <Link to="/Science">Science</Link>
          <Link to="/Sports">Sports</Link>
        </nav> */}

        <Routes>
          {/* <Route path="/Science2" element={<Home />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/News" element={<News />} />
          <Route path="/Sports" element={<Sports />} />
          <Route path="/Science" element={<Science />} />
        </Routes>

    </div>
  );
}

export default App;
