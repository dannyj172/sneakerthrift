import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Footer } from './components/Footer/Footer';
import { Catalog } from './components/Catalog/Catalog';
import { ListingDetails } from './components/ListingDetails/ListingDetails';
import { NotFound } from './components/NotFound/NotFound';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { CreateListing } from './components/CreateListing/CreateListing';
import { EditListing } from './components/EditListing/EditListing';
import { Logout } from './components/Logout/Logout';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/register' element={<Register />} />
        <Route path='/create-listing' element={<CreateListing />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/details' element={<ListingDetails />} />
        <Route path='/edit' element={<EditListing />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;