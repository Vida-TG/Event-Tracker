import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css';
import HomePage from './pages/Homepage';
import CreateEvent from './pages/CreateEvent';
import EditEvent from './pages/EditEvent';

function App() {
  return (
    <BrowserRouter className="App">
      <nav className="App-header">
        <Link to="/" >Home</Link>
        <Link to="/new-event" >New Event</Link>
      </nav>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/new-event' element={<CreateEvent />} />
        <Route path='/:id' element={<EditEvent />} />
        <Route path='/auth/register' />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
