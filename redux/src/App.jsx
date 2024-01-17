import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ReduxCounter from './Components/react_redux/ReduxCounter';
import Home from './Home';


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/redux-counter' element={<ReduxCounter />} />
            </Routes>
        </div>
    );
}
export default App;
