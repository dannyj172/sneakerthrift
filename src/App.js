import './App.css';

import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ListingProvider } from './contexts/ListingContext';

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { NotFound } from './components/NotFound/NotFound';
import { Home } from './components/Home/Home';
import { Catalog } from './components/Catalog/Catalog';
import { ListingDetails } from './components/ListingDetails/ListingDetails';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { CreateListing } from './components/CreateListing/CreateListing';
import { EditListing } from './components/EditListing/EditListing';
import { Logout } from './components/Logout/Logout';
import { MyListings } from './components/MyListings/MyListings';
import { RouteGuard } from './components/common/RouteGuard';

function App() {
  return (
    <AuthProvider>
      <ListingProvider>
        <div className="App">
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/register' element={<Register />} />
            <Route path='/catalog' element={<Catalog />} />
            <Route path='/my-listings' element={<MyListings />} />
            <Route path='/catalog/:listingId' element={<ListingDetails />} />
            <Route element={<RouteGuard />}>
              <Route path='/create-listing' element={<CreateListing />} />
              <Route path='/catalog/:listingId/edit' element={<EditListing />} />
            </Route>
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </ListingProvider>
    </AuthProvider >
  );
}

export default App;