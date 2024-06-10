import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
function App() {
    return (
        <Router>
            <HeaderComponent/>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;
