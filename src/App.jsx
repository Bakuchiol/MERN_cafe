import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
// pages
import AuthPage from './pages/AuthPage/AuthPage';
import NewOrderPage from './pages/NewOrderPage/NewOrderPage';
import OrderHistoryPage from './pages/OrderHistoryPage/OrderHistoryPage';
// navbar?
import NavBar from './components/NavBar/NavBar';
// css
import './App.css';

function App() {
  // array destructuring
  const [user, setUser] = useState(null)
  return (
    <main className="App">
        { 
        user ?
        <>
          <NavBar />
          <Routes>
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
          </Routes>
        </>
        :
          <AuthPage />
        }
    </main>
  );
}

export default App;
