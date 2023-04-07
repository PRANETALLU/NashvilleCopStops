import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import DatabaseSearch from './pages/DatabaseSearch';
import GeoVisualization from './pages/GeoVisualization';
import GraphVisualization from './pages/GraphVisualization';
import QueryReport from './pages/QueryReport';
import './CSS/Header.css';
import './CSS/Main.css';
import './CSS/Footer.css';
import './CSS/DatabaseSearch.css';
import './CSS/GraphVisualization.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/databaseSearch" element={<DatabaseSearch />}/>
          <Route path="/geoVisualization" element={<GeoVisualization />}/>
          <Route path="/graphVisualization" element={<GraphVisualization />}/>
          <Route path="/queryReport" element={<QueryReport />}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
