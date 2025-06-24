import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import AppLayout from './ui/AppLayout';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const element = document.getElementById(pathname.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route path='home' element={<></>} />
          <Route path='about' element={<></>} />
          <Route path='resume' element={<></>} />
          <Route path='portfolio' element={<></>} />
          <Route path='services' element={<></>} />
          <Route path='contact' element={<></>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
