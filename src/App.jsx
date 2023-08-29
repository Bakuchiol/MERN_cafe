import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import { getUser } from './utilities/users-service';
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
  const [user, setUser] = useState(getUser())
  return (
    <main className="App">
        { 
        user ?
        <>
          <NavBar user={user} setUser={setUser}/>
          <Routes>
            <Route path="/orders/new" element={<NewOrderPage  user={user} setUser={setUser}/>} />
            <Route path="/orders" element={<OrderHistoryPage user={user} setUser={setUser} />} />
          </Routes>
        </>
        :
          <AuthPage setUser={setUser}/>
        }
    </main>
  );
}

export default App;
