import './App.css'
import {Routes, Route} from 'react-router-dom'

import Home from './pages/Home/Home';
import Page404 from './pages/Error/Page404'
import Logement from './pages/Logement/Logement'
import Apropos from './pages/Apropos/Apropos'




function App () {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Logement/:id" element= {<Logement />} />
                <Route path="/Apropos" element={<Apropos />} />
                <Route path="/404" element={<Page404 />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </div>
    );
};
export default App;


