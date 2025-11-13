import './index.css';
import UserList from './Pages/UserList';
import UserDetails from './Pages/UserDetails';
import { Routes, Route } from 'react-router-dom'; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<UserList />} />
      <Route path="/user/:id" element={<UserDetails />} />
    </Routes>
  )
}

export default App;
