import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Footer } from './components/Footer/Footer';
import { Catalog } from './components/Catalog/Catalog';
import { ListingDetails } from './components/CreateListing/ListingDetails/ListingDetails';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/details' element={<ListingDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;