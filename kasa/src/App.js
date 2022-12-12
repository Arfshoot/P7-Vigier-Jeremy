import './App.css'
import {Routes, Route} from 'react-router-dom'

import Home from './Components/Home/Home';
import Page404 from './Components/Error/Page404'
import Logement from './Components/Logement/Logement'
import Apropos from './Components/Apropos/Apropos'




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


