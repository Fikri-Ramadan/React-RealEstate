import './App.css';
import Website from './pages/Website';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';
import Layout from './components/layout/Layout';
import Properties from './pages/properties/Properties';
import { QueryClient, QueryClientProvider, useMutation } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Property from './pages/property/Property';
import UserDetailsContext from './context/UserDetailsContext';
import { ScrollToTop } from './utils/common';
import Bookings from './pages/bookings/Bookings';
import Favourites from './pages/favourites/Favourites';

function App() {
  const queryClient = new QueryClient();
  const [userDetails, setUserDetails] = useState({
    favourites: [],
    bookings: [],
    token: null,
  });

  return (
    <UserDetailsContext.Provider value={{ userDetails, setUserDetails }}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Website />} />
                <Route path="/properties">
                  <Route index element={<Properties />} />
                  <Route path=":propertyId" element={<Property />} />
                </Route>
                <Route path="/bookings" element={<Bookings />} />
                <Route path="/favourites" element={<Favourites />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
        <ToastContainer />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </UserDetailsContext.Provider>
  );
}

export default App;
