import './App.css';
import NavBar from './components/NavBar';
import { Outlet } from 'react-router-dom';

function App() {
    return (
        <div className='App'>
            <NavBar />
            <div className='main'>
                <h1 className='title'>Welcome to the Suite Selector</h1>
                <Outlet />
            </div>
        </div>
    );
}

export default App;

// Testing git
